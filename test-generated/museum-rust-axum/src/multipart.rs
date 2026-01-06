//! Multipart form-data utilities for file uploads with automatic spooling

use axum::body::Bytes;
use axum::extract::multipart::Field;
use std::path::{Path, PathBuf};
use tokio::io::AsyncWriteExt;

/// Default in-memory threshold before spilling to disk: 8 MiB.
pub const DEFAULT_SPILL_THRESHOLD: usize = 8 * 1024 * 1024;

#[derive(Debug)]
pub enum SpoolStorage {
    InMemory(Bytes),
    TempFile(TempFileBacked),
}

#[derive(Debug)]
pub struct TempFileBacked {
    /// NamedTempFile deletes on drop.
    pub file: tempfile::NamedTempFile,
    /// Convenience: stable path to read later.
    pub path: PathBuf,
}

#[derive(Debug)]
pub struct Spooled {
    storage: SpoolStorage,
    len: u64,
}

impl Spooled {
    pub fn len(&self) -> u64 {
        self.len
    }

    pub fn is_empty(&self) -> bool {
        self.len == 0
    }

    pub fn is_in_memory(&self) -> bool {
        matches!(self.storage, SpoolStorage::InMemory(_))
    }

    pub fn as_bytes(&self) -> Option<&Bytes> {
        match &self.storage {
            SpoolStorage::InMemory(b) => Some(b),
            _ => None,
        }
    }

    pub fn as_tempfile_path(&self) -> Option<&Path> {
        match &self.storage {
            SpoolStorage::TempFile(t) => Some(t.path.as_path()),
            _ => None,
        }
    }

    pub fn into_storage(self) -> SpoolStorage {
        self.storage
    }

    /// If data was spilled to disk, read it back into memory.
    pub async fn into_bytes(self) -> Result<Bytes, UploadParseError> {
        match self.storage {
            SpoolStorage::InMemory(b) => Ok(b),
            SpoolStorage::TempFile(t) => {
                let data = tokio::fs::read(&t.path)
                    .await
                    .map_err(UploadParseError::Io)?;
                Ok(Bytes::from(data))
            }
        }
    }
}

#[derive(Debug)]
pub enum UploadParseError {
    /// Multipart parsing / stream errors.
    Multipart(axum::extract::multipart::MultipartError),
    /// I/O errors (tempfile creation, writing, reading back, etc.).
    Io(std::io::Error),
    /// A specific multipart field exceeded the configured limit.
    FieldTooLarge {
        field_name: String,
        limit_bytes: usize,
        observed_bytes: usize,
    },
    /// The multipart field did not have a `name` (rare, but possible).
    NamelessField,
}

impl From<axum::extract::multipart::MultipartError> for UploadParseError {
    fn from(e: axum::extract::multipart::MultipartError) -> Self {
        UploadParseError::Multipart(e)
    }
}

impl std::fmt::Display for UploadParseError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            UploadParseError::Multipart(e) => write!(f, "multipart error: {}", e),
            UploadParseError::Io(e) => write!(f, "io error: {}", e),
            UploadParseError::FieldTooLarge {
                field_name,
                limit_bytes,
                observed_bytes,
            } => {
                write!(
                    f,
                    "field '{}' too large: {} > {} bytes",
                    field_name, observed_bytes, limit_bytes
                )
            }
            UploadParseError::NamelessField => write!(f, "multipart field missing name"),
        }
    }
}

impl std::error::Error for UploadParseError {}

/// Stream a multipart field into memory up to `spill_threshold`, then spill to a tempfile.
/// Optionally enforce a hard `field_limit_bytes` (regardless of spill threshold).
pub async fn spool_multipart_field(
    mut field: Field<'_>,
    spill_threshold: usize,
    field_limit_bytes: Option<usize>,
) -> Result<Spooled, UploadParseError> {
    let field_name = field
        .name()
        .map(str::to_owned)
        .ok_or(UploadParseError::NamelessField)?;

    let mut total: usize = 0;

    // Start in-memory.
    let mut buf: Vec<u8> = Vec::with_capacity(16 * 1024);

    // When spilled, we keep a tokio file handle for incremental writes.
    let mut spilled: Option<(tempfile::NamedTempFile, tokio::fs::File, PathBuf)> = None;

    while let Some(chunk) = field.chunk().await? {
        total = total
            .checked_add(chunk.len())
            .ok_or_else(|| UploadParseError::Io(std::io::Error::other("size overflow")))?;

        if let Some(limit) = field_limit_bytes
            && total > limit
        {
            return Err(UploadParseError::FieldTooLarge {
                field_name,
                limit_bytes: limit,
                observed_bytes: total,
            });
        }

        match &mut spilled {
            None => {
                // If adding this chunk would exceed the threshold, spill.
                if buf.len() + chunk.len() <= spill_threshold {
                    buf.extend_from_slice(&chunk);
                } else {
                    let tmp = tempfile::NamedTempFile::new().map_err(UploadParseError::Io)?;
                    let path = tmp.path().to_path_buf();

                    // Open a std::fs::File to that path, then convert to tokio::fs::File
                    // so we can async-write chunks.
                    let std_file = std::fs::OpenOptions::new()
                        .write(true)
                        .open(&path)
                        .map_err(UploadParseError::Io)?;
                    let mut tokio_file = tokio::fs::File::from_std(std_file);

                    // Write buffered bytes first.
                    if !buf.is_empty() {
                        tokio_file
                            .write_all(&buf)
                            .await
                            .map_err(UploadParseError::Io)?;
                        buf.clear();
                    }

                    // Write the current chunk.
                    tokio_file
                        .write_all(&chunk)
                        .await
                        .map_err(UploadParseError::Io)?;

                    spilled = Some((tmp, tokio_file, path));
                }
            }
            Some((_tmp, file, _path)) => {
                file.write_all(&chunk).await.map_err(UploadParseError::Io)?;
            }
        }
    }

    let len = total as u64;

    if let Some((tmp, mut file, path)) = spilled {
        file.flush().await.map_err(UploadParseError::Io)?;
        drop(file);

        Ok(Spooled {
            storage: SpoolStorage::TempFile(TempFileBacked { file: tmp, path }),
            len,
        })
    } else {
        Ok(Spooled {
            storage: SpoolStorage::InMemory(Bytes::from(buf)),
            len,
        })
    }
}
