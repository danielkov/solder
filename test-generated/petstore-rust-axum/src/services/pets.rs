//! Pets service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{delete, get, post, put},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

// Per-operation result and error types
// ListPets types
pub type ListPetsResult = Result<crate::types::PetList, ListPetsError>;
#[derive(Debug)]
pub enum ListPetsError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(500)
    InternalServerError(crate::types::Error),
    }

impl IntoResponse for ListPetsError {
    fn into_response(self) -> Response {
        match self {
            ListPetsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            ListPetsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}

// CreatePet types
pub type CreatePetResult = Result<crate::types::Pet, CreatePetError>;
#[derive(Debug)]
pub enum CreatePetError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    }

impl IntoResponse for CreatePetError {
    fn into_response(self) -> Response {
        match self {
            CreatePetError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            }
    }
}

// ExportPets types
/// Binary response wrapper that sets the Content-Type header.
#[derive(Debug)]
pub struct ExportPetsResponse(pub bytes::Bytes);

impl IntoResponse for ExportPetsResponse {
    fn into_response(self) -> Response {
        ([(axum::http::header::CONTENT_TYPE, "application/zip")], self.0).into_response()
        }
}

pub type ExportPetsResult = Result<ExportPetsResponse, ExportPetsError>;
#[derive(Debug)]
pub enum ExportPetsError {
    InternalError(String),
    }

impl IntoResponse for ExportPetsError {
    fn into_response(self) -> Response {
        match self {
            ExportPetsError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
            }
    }
}

// ExportPetsCsv types
/// Binary response wrapper that sets the Content-Type header.
#[derive(Debug)]
pub struct ExportPetsCsvResponse(pub bytes::Bytes);

impl IntoResponse for ExportPetsCsvResponse {
    fn into_response(self) -> Response {
        ([(axum::http::header::CONTENT_TYPE, "text/csv")], self.0).into_response()
        }
}

pub type ExportPetsCsvResult = Result<ExportPetsCsvResponse, ExportPetsCsvError>;
#[derive(Debug)]
pub enum ExportPetsCsvError {
    InternalError(String),
    }

impl IntoResponse for ExportPetsCsvError {
    fn into_response(self) -> Response {
        match self {
            ExportPetsCsvError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
            }
    }
}

// GetPetById types
pub type GetPetByIdResult = Result<crate::types::Pet, GetPetByIdError>;
#[derive(Debug)]
pub enum GetPetByIdError {
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for GetPetByIdError {
    fn into_response(self) -> Response {
        match self {
            GetPetByIdError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}

// UpdatePet types
pub type UpdatePetResult = Result<crate::types::Pet, UpdatePetError>;
#[derive(Debug)]
pub enum UpdatePetError {
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for UpdatePetError {
    fn into_response(self) -> Response {
        match self {
            UpdatePetError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}

// DeletePet types
pub type DeletePetResult = Result<(), DeletePetError>;
#[derive(Debug)]
pub enum DeletePetError {
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for DeletePetError {
    fn into_response(self) -> Response {
        match self {
            DeletePetError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}

// GetPetDocuments types
/// Binary response with multiple supported content types.
/// Use the appropriate variant to set the Content-Type header.
#[derive(Debug)]
pub enum GetPetDocumentsResponse {
    /// Response with Content-Type: application/pdf
    ApplicationPdf(bytes::Bytes),
    /// Response with Content-Type: image/jpeg
    ImageJpeg(bytes::Bytes),
    /// Response with Content-Type: image/png
    ImagePng(bytes::Bytes),
    /// Custom content type response
    Custom { content_type: String, body: bytes::Bytes },
}

impl IntoResponse for GetPetDocumentsResponse {
    fn into_response(self) -> Response {
        match self {
            GetPetDocumentsResponse::ApplicationPdf(body) => {
                ([(axum::http::header::CONTENT_TYPE, "application/pdf")], body).into_response()
            }
            GetPetDocumentsResponse::ImageJpeg(body) => {
                ([(axum::http::header::CONTENT_TYPE, "image/jpeg")], body).into_response()
            }
            GetPetDocumentsResponse::ImagePng(body) => {
                ([(axum::http::header::CONTENT_TYPE, "image/png")], body).into_response()
            }
            GetPetDocumentsResponse::Custom { content_type, body } => {
                ([(axum::http::header::CONTENT_TYPE, content_type)], body).into_response()
            }
        }
    }
}

pub type GetPetDocumentsResult = Result<GetPetDocumentsResponse, GetPetDocumentsError>;
#[derive(Debug)]
pub enum GetPetDocumentsError {
    /// Status: Code(404)
    NotFound,
    }

impl IntoResponse for GetPetDocumentsError {
    fn into_response(self) -> Response {
        match self {
            GetPetDocumentsError::NotFound => {
                let status = StatusCode::NOT_FOUND;
                status.into_response()
                }
            }
    }
}

// GetPetPhoto types
/// Binary response wrapper that sets the Content-Type header.
#[derive(Debug)]
pub struct GetPetPhotoResponse(pub bytes::Bytes);

impl IntoResponse for GetPetPhotoResponse {
    fn into_response(self) -> Response {
        ([(axum::http::header::CONTENT_TYPE, "image/jpeg")], self.0).into_response()
        }
}

pub type GetPetPhotoResult = Result<GetPetPhotoResponse, GetPetPhotoError>;
#[derive(Debug)]
pub enum GetPetPhotoError {
    /// Status: Code(404)
    NotFound,
    }

impl IntoResponse for GetPetPhotoError {
    fn into_response(self) -> Response {
        match self {
            GetPetPhotoError::NotFound => {
                let status = StatusCode::NOT_FOUND;
                status.into_response()
                }
            }
    }
}



// Multipart request structs


/// Pets service trait
///
/// # Example
///
/// ```rust
/// use pet_store_api::shared::RequestContext;
/// use pet_store_api::services::pets::{
///     Pets,
///     ListPetsResult,
///     ListPetsQuery,
///     CreatePetResult,
///     ExportPetsResult,
///     ExportPetsCsvResult,
///     GetPetByIdResult,
///     UpdatePetResult,
///     DeletePetResult,
///     GetPetDocumentsResult,
///     GetPetDocumentsQuery,
///     GetPetPhotoResult,
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
/// struct PetsService {
///     // Add any dependencies your service needs
/// }
///
/// impl PetsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Pets<AppState> for PetsService {
///     async fn list_pets(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: ListPetsQuery,
///     ) -> ListPetsResult {
///         // Implement your business logic here
///         // Return Ok(your_petlist) or Err(error)
///         todo!("implement list_pets")
///     }
///
///     async fn create_pet(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: pet_store_api::types::NewPet,
///     ) -> CreatePetResult {
///         // Implement your business logic here
///         // Return Ok(your_pet) or Err(error)
///         todo!("implement create_pet")
///     }
///
///     async fn export_pets(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> ExportPetsResult {
///         // Implement your business logic here
///         // Return Ok(your_primitive_bytes) or Err(error)
///         todo!("implement export_pets")
///     }
///
///     async fn export_pets_csv(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> ExportPetsCsvResult {
///         // Implement your business logic here
///         // Return Ok(your_primitive_bytes) or Err(error)
///         todo!("implement export_pets_csv")
///     }
///
///     async fn get_pet_by_id(
///         &self,
///         ctx: RequestContext<AppState>,
///         pet_id: String,
///     ) -> GetPetByIdResult {
///         // Implement your business logic here
///         // Return Ok(your_pet) or Err(error)
///         todo!("implement get_pet_by_id")
///     }
///
///     async fn update_pet(
///         &self,
///         ctx: RequestContext<AppState>,
///         pet_id: String,
///         body: pet_store_api::types::UpdatePet,
///     ) -> UpdatePetResult {
///         // Implement your business logic here
///         // Return Ok(your_pet) or Err(error)
///         todo!("implement update_pet")
///     }
///
///     async fn delete_pet(
///         &self,
///         ctx: RequestContext<AppState>,
///         pet_id: String,
///     ) -> DeletePetResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
///     async fn get_pet_documents(
///         &self,
///         ctx: RequestContext<AppState>,
///         pet_id: String,
///         query: GetPetDocumentsQuery,
///     ) -> GetPetDocumentsResult {
///         // Implement your business logic here
///         // Return Ok(your_primitive_bytes) or Err(error)
///         todo!("implement get_pet_documents")
///     }
///
///     async fn get_pet_photo(
///         &self,
///         ctx: RequestContext<AppState>,
///         pet_id: String,
///     ) -> GetPetPhotoResult {
///         // Implement your business logic here
///         // Return Ok(your_primitive_bytes) or Err(error)
///         todo!("implement get_pet_photo")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = PetsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Pets<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /pets
    fn list_pets(
        &self,
        ctx: RequestContext<S>,
        query: ListPetsQuery,
        ) -> impl std::future::Future<Output = ListPetsResult> + Send;

    /// Post /pets
    fn create_pet(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::NewPet,
        ) -> impl std::future::Future<Output = CreatePetResult> + Send;

    /// Get /pets/export
    fn export_pets(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = ExportPetsResult> + Send;

    /// Get /pets/export/csv
    fn export_pets_csv(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = ExportPetsCsvResult> + Send;

    /// Get /pets/{petId}
    fn get_pet_by_id(
        &self,
        ctx: RequestContext<S>,
        pet_id: String,
        ) -> impl std::future::Future<Output = GetPetByIdResult> + Send;

    /// Put /pets/{petId}
    fn update_pet(
        &self,
        ctx: RequestContext<S>,
        pet_id: String,
        body: crate::types::UpdatePet,
        ) -> impl std::future::Future<Output = UpdatePetResult> + Send;

    /// Delete /pets/{petId}
    fn delete_pet(
        &self,
        ctx: RequestContext<S>,
        pet_id: String,
        ) -> impl std::future::Future<Output = DeletePetResult> + Send;

    /// Get /pets/{petId}/documents
    fn get_pet_documents(
        &self,
        ctx: RequestContext<S>,
        pet_id: String,
        query: GetPetDocumentsQuery,
        ) -> impl std::future::Future<Output = GetPetDocumentsResult> + Send;

    /// Get /pets/{petId}/photo
    fn get_pet_photo(
        &self,
        ctx: RequestContext<S>,
        pet_id: String,
        ) -> impl std::future::Future<Output = GetPetPhotoResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let list_pets_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Query(query): axum::extract::Query<ListPetsQuery>
        | async move {
            match service.list_pets(
                ctx,
                query,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let create_pet_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::NewPet>
        | async move {
            match service.create_pet(
                ctx,
                body,
                ).await {
                Ok(result) => {
                    let status = StatusCode::CREATED;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let export_pets_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.export_pets(
                ctx,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    // Binary response - use the wrapper's IntoResponse which sets Content-Type
                    (status, result).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let export_pets_csv_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.export_pets_csv(
                ctx,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    // Binary response - use the wrapper's IntoResponse which sets Content-Type
                    (status, result).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let get_pet_by_id_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>
        | async move {
            let pet_id = path_params;
            match service.get_pet_by_id(
                ctx,
                pet_id,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let update_pet_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>, Json(body): Json<crate::types::UpdatePet>
        | async move {
            let pet_id = path_params;
            match service.update_pet(
                ctx,
                pet_id,
                body,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let delete_pet_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>
        | async move {
            let pet_id = path_params;
            match service.delete_pet(
                ctx,
                pet_id,
                ).await {
                Ok(_) => {
                    let status = StatusCode::NO_CONTENT;
                    status.into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let get_pet_documents_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>, axum::extract::Query(query): axum::extract::Query<GetPetDocumentsQuery>
        | async move {
            let pet_id = path_params;
            match service.get_pet_documents(
                ctx,
                pet_id,
                query,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    // Multiple binary content types - result implements IntoResponse with proper headers
                    (status, result).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let get_pet_photo_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>
        | async move {
            let pet_id = path_params;
            match service.get_pet_photo(
                ctx,
                pet_id,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    // Binary response - use the wrapper's IntoResponse which sets Content-Type
                    (status, result).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        Router::new()
            .route("/pets", get(list_pets_handler))
            .route("/pets", post(create_pet_handler))
            .route("/pets/export", get(export_pets_handler))
            .route("/pets/export/csv", get(export_pets_csv_handler))
            .route("/pets/{petId}", get(get_pet_by_id_handler))
            .route("/pets/{petId}", put(update_pet_handler))
            .route("/pets/{petId}", delete(delete_pet_handler))
            .route("/pets/{petId}/documents", get(get_pet_documents_handler))
            .route("/pets/{petId}/photo", get(get_pet_photo_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct ListPetsQuery {
    pub limit: Option<String>,
    pub offset: Option<String>,
    pub status: Option<String>,
    
}

#[derive(Debug, serde::Deserialize)]
pub struct GetPetDocumentsQuery {
    pub format: Option<String>,
    
}

