//! Types for the files service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UploadFileWithMetadataRequestMetadata {
    #[serde(rename = "ownerId")]
    pub owner_id: Option<String>,
    pub tags: Option<Vec<String>>,
}

