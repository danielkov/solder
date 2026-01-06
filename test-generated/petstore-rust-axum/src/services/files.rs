//! Files service module
use axum::{
    Extension, Json, Router,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::{post, put},
};

use crate::shared::RequestContext;

// Per-operation result and error types
// UploadFile types
pub type UploadFileResult = Result<(), UploadFileError>;
#[derive(Debug)]
pub enum UploadFileError {
    InternalError(String),
}

impl IntoResponse for UploadFileError {
    fn into_response(self) -> Response {
        match self {
            UploadFileError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
        }
    }
}

// UploadMultipleFiles types
pub type UploadMultipleFilesResult = Result<(), UploadMultipleFilesError>;
#[derive(Debug)]
pub enum UploadMultipleFilesError {
    InternalError(String),
}

impl IntoResponse for UploadMultipleFilesError {
    fn into_response(self) -> Response {
        match self {
            UploadMultipleFilesError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
        }
    }
}

// ImportFile types
pub type ImportFileResult = Result<(), ImportFileError>;
#[derive(Debug)]
pub enum ImportFileError {
    InternalError(String),
}

impl IntoResponse for ImportFileError {
    fn into_response(self) -> Response {
        match self {
            ImportFileError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
        }
    }
}

// UploadRawFile types
pub type UploadRawFileResult = Result<(), UploadRawFileError>;
#[derive(Debug)]
pub enum UploadRawFileError {
    InternalError(String),
}

impl IntoResponse for UploadRawFileError {
    fn into_response(self) -> Response {
        match self {
            UploadRawFileError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
        }
    }
}

// UploadFileWithMetadata types
pub type UploadFileWithMetadataResult = Result<(), UploadFileWithMetadataError>;
#[derive(Debug)]
pub enum UploadFileWithMetadataError {
    InternalError(String),
}

impl IntoResponse for UploadFileWithMetadataError {
    fn into_response(self) -> Response {
        match self {
            UploadFileWithMetadataError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
        }
    }
}

// Multipart request structs
// UploadFile multipart request
#[derive(Debug)]
pub struct UploadFileRequest {
    pub description: String,
    pub file: crate::multipart::Spooled,
}

#[derive(Debug)]
pub struct UploadFileRejection {
    message: String,
    status: StatusCode,
}

impl UploadFileRejection {
    fn bad_request(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::BAD_REQUEST,
        }
    }

    fn payload_too_large(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::PAYLOAD_TOO_LARGE,
        }
    }

    fn internal_error(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

impl IntoResponse for UploadFileRejection {
    fn into_response(self) -> Response {
        (self.status, self.message).into_response()
    }
}

impl<S> axum::extract::FromRequest<S> for UploadFileRequest
where
    S: Send + Sync,
{
    type Rejection = UploadFileRejection;

    async fn from_request(
        req: axum::http::Request<axum::body::Body>,
        state: &S,
    ) -> Result<Self, Self::Rejection> {
        // Delegate to axum's Multipart extractor
        let multipart = axum::extract::Multipart::from_request(req, state)
            .await
            .map_err(|e| UploadFileRejection::bad_request(format!("multipart error: {}", e)))?;

        Self::decode_multipart(multipart).await
    }
}

impl UploadFileRequest {
    async fn decode_multipart(
        mut multipart: axum::extract::Multipart,
    ) -> Result<Self, UploadFileRejection> {
        let mut description: Option<_> = None;
        let mut file: Option<_> = None;

        while let Some(field) = multipart.next_field().await.map_err(|e| {
            UploadFileRejection::bad_request(format!("multipart field error: {}", e))
        })? {
            let name = field.name().map(str::to_owned).unwrap_or_default();

            match name.as_str() {
                "description" => {
                    if description.is_some() {
                        return Err(UploadFileRejection::bad_request(format!(
                            "duplicate field: {}",
                            "description"
                        )));
                    }
                    let text = field.text().await.map_err(|_| {
                        UploadFileRejection::bad_request(format!(
                            "invalid utf-8 in field: {}",
                            name
                        ))
                    })?;
                    description = Some(text);
                }
                "file" => {
                    if file.is_some() {
                        return Err(UploadFileRejection::bad_request(format!(
                            "duplicate field: {}",
                            "file"
                        )));
                    }
                    let spooled = crate::multipart::spool_multipart_field(
                        field,
                        crate::multipart::DEFAULT_SPILL_THRESHOLD,
                        None,
                    )
                    .await
                    .map_err(|e| match e {
                        crate::multipart::UploadParseError::FieldTooLarge {
                            field_name,
                            limit_bytes,
                            observed_bytes,
                        } => UploadFileRejection::payload_too_large(format!(
                            "field '{}' too large: {} > {} bytes",
                            field_name, observed_bytes, limit_bytes
                        )),
                        crate::multipart::UploadParseError::Io(e) => {
                            UploadFileRejection::internal_error(format!("io error: {}", e))
                        }
                        e => UploadFileRejection::bad_request(format!("upload error: {}", e)),
                    })?;
                    file = Some(spooled);
                }
                other => {
                    return Err(UploadFileRejection::bad_request(format!(
                        "unexpected field: {}",
                        other
                    )));
                }
            }
        }

        Ok(Self {
            description: description.ok_or_else(|| {
                UploadFileRejection::bad_request(format!("missing field: {}", "description"))
            })?,
            file: file.ok_or_else(|| {
                UploadFileRejection::bad_request(format!("missing field: {}", "file"))
            })?,
        })
    }
}

// UploadMultipleFiles multipart request
#[derive(Debug)]
pub struct UploadMultipleFilesRequest {
    pub files: crate::multipart::Spooled,
}

#[derive(Debug)]
pub struct UploadMultipleFilesRejection {
    message: String,
    status: StatusCode,
}

impl UploadMultipleFilesRejection {
    fn bad_request(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::BAD_REQUEST,
        }
    }

    fn payload_too_large(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::PAYLOAD_TOO_LARGE,
        }
    }

    fn internal_error(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

impl IntoResponse for UploadMultipleFilesRejection {
    fn into_response(self) -> Response {
        (self.status, self.message).into_response()
    }
}

impl<S> axum::extract::FromRequest<S> for UploadMultipleFilesRequest
where
    S: Send + Sync,
{
    type Rejection = UploadMultipleFilesRejection;

    async fn from_request(
        req: axum::http::Request<axum::body::Body>,
        state: &S,
    ) -> Result<Self, Self::Rejection> {
        // Delegate to axum's Multipart extractor
        let multipart = axum::extract::Multipart::from_request(req, state)
            .await
            .map_err(|e| {
                UploadMultipleFilesRejection::bad_request(format!("multipart error: {}", e))
            })?;

        Self::decode_multipart(multipart).await
    }
}

impl UploadMultipleFilesRequest {
    async fn decode_multipart(
        mut multipart: axum::extract::Multipart,
    ) -> Result<Self, UploadMultipleFilesRejection> {
        let mut files: Option<_> = None;

        while let Some(field) = multipart.next_field().await.map_err(|e| {
            UploadMultipleFilesRejection::bad_request(format!("multipart field error: {}", e))
        })? {
            let name = field.name().map(str::to_owned).unwrap_or_default();

            match name.as_str() {
                "files" => {
                    if files.is_some() {
                        return Err(UploadMultipleFilesRejection::bad_request(format!(
                            "duplicate field: {}",
                            "files"
                        )));
                    }
                    let spooled = crate::multipart::spool_multipart_field(
                        field,
                        crate::multipart::DEFAULT_SPILL_THRESHOLD,
                        None,
                    )
                    .await
                    .map_err(|e| match e {
                        crate::multipart::UploadParseError::FieldTooLarge {
                            field_name,
                            limit_bytes,
                            observed_bytes,
                        } => UploadMultipleFilesRejection::payload_too_large(format!(
                            "field '{}' too large: {} > {} bytes",
                            field_name, observed_bytes, limit_bytes
                        )),
                        crate::multipart::UploadParseError::Io(e) => {
                            UploadMultipleFilesRejection::internal_error(format!("io error: {}", e))
                        }
                        e => UploadMultipleFilesRejection::bad_request(format!(
                            "upload error: {}",
                            e
                        )),
                    })?;
                    files = Some(spooled);
                }
                other => {
                    return Err(UploadMultipleFilesRejection::bad_request(format!(
                        "unexpected field: {}",
                        other
                    )));
                }
            }
        }

        Ok(Self {
            files: files.ok_or_else(|| {
                UploadMultipleFilesRejection::bad_request(format!("missing field: {}", "files"))
            })?,
        })
    }
}

// ImportFile multipart request
#[derive(Debug)]
pub struct ImportFileRequest {
    pub file: crate::multipart::Spooled,
    pub format: String,
    pub validate: bool,
}

#[derive(Debug)]
pub struct ImportFileRejection {
    message: String,
    status: StatusCode,
}

impl ImportFileRejection {
    fn bad_request(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::BAD_REQUEST,
        }
    }

    fn payload_too_large(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::PAYLOAD_TOO_LARGE,
        }
    }

    fn internal_error(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

impl IntoResponse for ImportFileRejection {
    fn into_response(self) -> Response {
        (self.status, self.message).into_response()
    }
}

impl<S> axum::extract::FromRequest<S> for ImportFileRequest
where
    S: Send + Sync,
{
    type Rejection = ImportFileRejection;

    async fn from_request(
        req: axum::http::Request<axum::body::Body>,
        state: &S,
    ) -> Result<Self, Self::Rejection> {
        // Delegate to axum's Multipart extractor
        let multipart = axum::extract::Multipart::from_request(req, state)
            .await
            .map_err(|e| ImportFileRejection::bad_request(format!("multipart error: {}", e)))?;

        Self::decode_multipart(multipart).await
    }
}

impl ImportFileRequest {
    async fn decode_multipart(
        mut multipart: axum::extract::Multipart,
    ) -> Result<Self, ImportFileRejection> {
        let mut file: Option<_> = None;
        let mut format: Option<_> = None;
        let mut validate: Option<_> = None;

        while let Some(field) = multipart.next_field().await.map_err(|e| {
            ImportFileRejection::bad_request(format!("multipart field error: {}", e))
        })? {
            let name = field.name().map(str::to_owned).unwrap_or_default();

            match name.as_str() {
                "file" => {
                    if file.is_some() {
                        return Err(ImportFileRejection::bad_request(format!(
                            "duplicate field: {}",
                            "file"
                        )));
                    }
                    let spooled = crate::multipart::spool_multipart_field(
                        field,
                        crate::multipart::DEFAULT_SPILL_THRESHOLD,
                        None,
                    )
                    .await
                    .map_err(|e| match e {
                        crate::multipart::UploadParseError::FieldTooLarge {
                            field_name,
                            limit_bytes,
                            observed_bytes,
                        } => ImportFileRejection::payload_too_large(format!(
                            "field '{}' too large: {} > {} bytes",
                            field_name, observed_bytes, limit_bytes
                        )),
                        crate::multipart::UploadParseError::Io(e) => {
                            ImportFileRejection::internal_error(format!("io error: {}", e))
                        }
                        e => ImportFileRejection::bad_request(format!("upload error: {}", e)),
                    })?;
                    file = Some(spooled);
                }
                "format" => {
                    if format.is_some() {
                        return Err(ImportFileRejection::bad_request(format!(
                            "duplicate field: {}",
                            "format"
                        )));
                    }
                    let text = field.text().await.map_err(|_| {
                        ImportFileRejection::bad_request(format!(
                            "invalid utf-8 in field: {}",
                            name
                        ))
                    })?;
                    format = Some(text);
                }
                "validate" => {
                    if validate.is_some() {
                        return Err(ImportFileRejection::bad_request(format!(
                            "duplicate field: {}",
                            "validate"
                        )));
                    }
                    let text = field.text().await.map_err(|_| {
                        ImportFileRejection::bad_request(format!(
                            "invalid utf-8 in field: {}",
                            name
                        ))
                    })?;
                    let parsed = text.parse::<bool>().map_err(|e| {
                        ImportFileRejection::bad_request(format!(
                            "invalid boolean in field '{}': {}",
                            name, e
                        ))
                    })?;
                    validate = Some(parsed);
                }
                other => {
                    return Err(ImportFileRejection::bad_request(format!(
                        "unexpected field: {}",
                        other
                    )));
                }
            }
        }

        Ok(Self {
            file: file.ok_or_else(|| {
                ImportFileRejection::bad_request(format!("missing field: {}", "file"))
            })?,
            format: format.ok_or_else(|| {
                ImportFileRejection::bad_request(format!("missing field: {}", "format"))
            })?,
            validate: validate.ok_or_else(|| {
                ImportFileRejection::bad_request(format!("missing field: {}", "validate"))
            })?,
        })
    }
}

// UploadFileWithMetadata multipart request
#[derive(Debug)]
pub struct UploadFileWithMetadataRequest {
    pub description: String,
    pub file: crate::multipart::Spooled,
    pub metadata: crate::types::UploadFileWithMetadataRequestMetadata,
    pub owner_id: i32,
}

#[derive(Debug)]
pub struct UploadFileWithMetadataRejection {
    message: String,
    status: StatusCode,
}

impl UploadFileWithMetadataRejection {
    fn bad_request(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::BAD_REQUEST,
        }
    }

    fn payload_too_large(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::PAYLOAD_TOO_LARGE,
        }
    }

    fn internal_error(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
            status: StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

impl IntoResponse for UploadFileWithMetadataRejection {
    fn into_response(self) -> Response {
        (self.status, self.message).into_response()
    }
}

impl<S> axum::extract::FromRequest<S> for UploadFileWithMetadataRequest
where
    S: Send + Sync,
{
    type Rejection = UploadFileWithMetadataRejection;

    async fn from_request(
        req: axum::http::Request<axum::body::Body>,
        state: &S,
    ) -> Result<Self, Self::Rejection> {
        // Delegate to axum's Multipart extractor
        let multipart = axum::extract::Multipart::from_request(req, state)
            .await
            .map_err(|e| {
                UploadFileWithMetadataRejection::bad_request(format!("multipart error: {}", e))
            })?;

        Self::decode_multipart(multipart).await
    }
}

impl UploadFileWithMetadataRequest {
    async fn decode_multipart(
        mut multipart: axum::extract::Multipart,
    ) -> Result<Self, UploadFileWithMetadataRejection> {
        let mut description: Option<_> = None;
        let mut file: Option<_> = None;
        let mut metadata: Option<_> = None;
        let mut owner_id: Option<_> = None;

        while let Some(field) = multipart.next_field().await.map_err(|e| {
            UploadFileWithMetadataRejection::bad_request(format!("multipart field error: {}", e))
        })? {
            let name = field.name().map(str::to_owned).unwrap_or_default();

            match name.as_str() {
                "description" => {
                    if description.is_some() {
                        return Err(UploadFileWithMetadataRejection::bad_request(format!(
                            "duplicate field: {}",
                            "description"
                        )));
                    }
                    let text = field.text().await.map_err(|_| {
                        UploadFileWithMetadataRejection::bad_request(format!(
                            "invalid utf-8 in field: {}",
                            name
                        ))
                    })?;
                    description = Some(text);
                }
                "file" => {
                    if file.is_some() {
                        return Err(UploadFileWithMetadataRejection::bad_request(format!(
                            "duplicate field: {}",
                            "file"
                        )));
                    }
                    let spooled = crate::multipart::spool_multipart_field(
                        field,
                        crate::multipart::DEFAULT_SPILL_THRESHOLD,
                        None,
                    )
                    .await
                    .map_err(|e| match e {
                        crate::multipart::UploadParseError::FieldTooLarge {
                            field_name,
                            limit_bytes,
                            observed_bytes,
                        } => UploadFileWithMetadataRejection::payload_too_large(format!(
                            "field '{}' too large: {} > {} bytes",
                            field_name, observed_bytes, limit_bytes
                        )),
                        crate::multipart::UploadParseError::Io(e) => {
                            UploadFileWithMetadataRejection::internal_error(format!(
                                "io error: {}",
                                e
                            ))
                        }
                        e => UploadFileWithMetadataRejection::bad_request(format!(
                            "upload error: {}",
                            e
                        )),
                    })?;
                    file = Some(spooled);
                }
                "metadata" => {
                    if metadata.is_some() {
                        return Err(UploadFileWithMetadataRejection::bad_request(format!(
                            "duplicate field: {}",
                            "metadata"
                        )));
                    }
                    let text = field.text().await.map_err(|_| {
                        UploadFileWithMetadataRejection::bad_request(format!(
                            "invalid utf-8 in field: {}",
                            name
                        ))
                    })?;
                    let parsed = serde_json::from_str(&text).map_err(|e| {
                        UploadFileWithMetadataRejection::bad_request(format!(
                            "invalid JSON in field '{}': {}",
                            name, e
                        ))
                    })?;
                    metadata = Some(parsed);
                }
                "ownerId" => {
                    if owner_id.is_some() {
                        return Err(UploadFileWithMetadataRejection::bad_request(format!(
                            "duplicate field: {}",
                            "ownerId"
                        )));
                    }
                    let text = field.text().await.map_err(|_| {
                        UploadFileWithMetadataRejection::bad_request(format!(
                            "invalid utf-8 in field: {}",
                            name
                        ))
                    })?;
                    let parsed = text.parse::<i32>().map_err(|e| {
                        UploadFileWithMetadataRejection::bad_request(format!(
                            "invalid i32 in field '{}': {}",
                            name, e
                        ))
                    })?;
                    owner_id = Some(parsed);
                }
                other => {
                    return Err(UploadFileWithMetadataRejection::bad_request(format!(
                        "unexpected field: {}",
                        other
                    )));
                }
            }
        }

        Ok(Self {
            description: description.ok_or_else(|| {
                UploadFileWithMetadataRejection::bad_request(format!(
                    "missing field: {}",
                    "description"
                ))
            })?,
            file: file.ok_or_else(|| {
                UploadFileWithMetadataRejection::bad_request(format!("missing field: {}", "file"))
            })?,
            metadata: metadata.ok_or_else(|| {
                UploadFileWithMetadataRejection::bad_request(format!(
                    "missing field: {}",
                    "metadata"
                ))
            })?,
            owner_id: owner_id.ok_or_else(|| {
                UploadFileWithMetadataRejection::bad_request(format!(
                    "missing field: {}",
                    "ownerId"
                ))
            })?,
        })
    }
}

/// Files service trait
///
/// # Example
///
/// ```rust
/// use pet_store_api::shared::RequestContext;
/// use pet_store_api::services::files::{
///     Files,
///     UploadFileResult,
///     UploadMultipleFilesResult,
///     ImportFileResult,
///     UploadRawFileResult,
///     UploadFileWithMetadataResult,
/// };
///
/// // Define your application state
/// #[derive(Clone)]
/// struct AppState {
///     // Add your state fields here (e.g., database connection, config, etc.)
/// }
///
/// // Define your service implementation
/// #[derive(Clone)]
/// struct FilesService {
///     // Add any dependencies your service needs
/// }
///
/// impl FilesService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Files<AppState> for FilesService {
///     async fn upload_file(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: pet_store_api::types::UploadFileRequest,
///     ) -> UploadFileResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
///     async fn upload_multiple_files(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: pet_store_api::types::UploadMultipleFilesRequest,
///     ) -> UploadMultipleFilesResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
///     async fn import_file(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: pet_store_api::types::FileImportRequest,
///     ) -> ImportFileResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
///     async fn upload_raw_file(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: pet_store_api::types::Primitive_Bytes,
///     ) -> UploadRawFileResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
///     async fn upload_file_with_metadata(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: pet_store_api::types::UploadFileWithMetadataRequest,
///     ) -> UploadFileWithMetadataResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = FilesService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Files<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Post /files
    fn upload_file(
        &self,
        ctx: RequestContext<S>,
        body: UploadFileRequest,
    ) -> impl std::future::Future<Output = UploadFileResult> + Send;

    /// Post /files/batch
    fn upload_multiple_files(
        &self,
        ctx: RequestContext<S>,
        body: UploadMultipleFilesRequest,
    ) -> impl std::future::Future<Output = UploadMultipleFilesResult> + Send;

    /// Post /files/import
    fn import_file(
        &self,
        ctx: RequestContext<S>,
        body: ImportFileRequest,
    ) -> impl std::future::Future<Output = ImportFileResult> + Send;

    /// Put /files/raw
    fn upload_raw_file(
        &self,
        ctx: RequestContext<S>,
        body: bytes::Bytes,
    ) -> impl std::future::Future<Output = UploadRawFileResult> + Send;

    /// Post /files/with-metadata
    fn upload_file_with_metadata(
        &self,
        ctx: RequestContext<S>,
        body: UploadFileWithMetadataRequest,
    ) -> impl std::future::Future<Output = UploadFileWithMetadataResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let upload_file_handler = |ctx: RequestContext<S>,
                                   Extension(service): Extension<Self>,
                                   body: UploadFileRequest| async move {
            match service.upload_file(ctx, body).await {
                Ok(_) => {
                    let status = StatusCode::CREATED;
                    status.into_response()
                }
                Err(e) => e.into_response(),
            }
        };

        let upload_multiple_files_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             body: UploadMultipleFilesRequest| async move {
                match service.upload_multiple_files(ctx, body).await {
                    Ok(_) => {
                        let status = StatusCode::CREATED;
                        status.into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let import_file_handler = |ctx: RequestContext<S>,
                                   Extension(service): Extension<Self>,
                                   body: ImportFileRequest| async move {
            match service.import_file(ctx, body).await {
                Ok(_) => {
                    let status = StatusCode::CREATED;
                    status.into_response()
                }
                Err(e) => e.into_response(),
            }
        };

        let upload_raw_file_handler = |ctx: RequestContext<S>,
                                       Extension(service): Extension<Self>,
                                       body: bytes::Bytes| async move {
            match service.upload_raw_file(ctx, body).await {
                Ok(_) => {
                    let status = StatusCode::NO_CONTENT;
                    status.into_response()
                }
                Err(e) => e.into_response(),
            }
        };

        let upload_file_with_metadata_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             body: UploadFileWithMetadataRequest| async move {
                match service.upload_file_with_metadata(ctx, body).await {
                    Ok(_) => {
                        let status = StatusCode::CREATED;
                        status.into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route("/files", post(upload_file_handler))
            .route("/files/batch", post(upload_multiple_files_handler))
            .route("/files/import", post(import_file_handler))
            .route("/files/raw", put(upload_raw_file_handler))
            .route(
                "/files/with-metadata",
                post(upload_file_with_metadata_handler),
            )
            .layer(Extension(self))
    }
}

// Query parameter structs
