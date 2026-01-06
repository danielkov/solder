//! Embeddings service module
use axum::{
    Extension, Json, Router,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::{get, post},
};

use crate::shared::RequestContext;

/// Bearer authentication token
#[derive(Clone, Debug)]
pub struct AuthBearer(pub String);

// Per-operation result and error types
// CreateEmbeddings types
pub type CreateEmbeddingsResult =
    Result<crate::types::CreateEmbeddingsResponse, CreateEmbeddingsError>;
#[derive(Debug)]
pub enum CreateEmbeddingsError {
    /// Status: Code(400)
    BadRequest(crate::types::BadRequestResponse),
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(402)
    Status402(crate::types::PaymentRequiredResponse),
    /// Status: Code(404)
    NotFound(crate::types::NotFoundResponse),
    /// Status: Code(429)
    TooManyRequests(crate::types::TooManyRequestsResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    /// Status: Code(502)
    BadGateway(crate::types::BadGatewayResponse),
    /// Status: Code(503)
    ServiceUnavailable(crate::types::ServiceUnavailableResponse),
    /// Status: Code(524)
    Status524(crate::types::EdgeNetworkTimeoutResponse),
    /// Status: Code(529)
    Status529(crate::types::ProviderOverloadedResponse),
}

impl IntoResponse for CreateEmbeddingsError {
    fn into_response(self) -> Response {
        match self {
            CreateEmbeddingsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            CreateEmbeddingsError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            CreateEmbeddingsError::Status402(err) => {
                let status = StatusCode::PAYMENT_REQUIRED;
                (status, Json(err)).into_response()
            }
            CreateEmbeddingsError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
            CreateEmbeddingsError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
            }
            CreateEmbeddingsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
            CreateEmbeddingsError::BadGateway(err) => {
                let status = StatusCode::BAD_GATEWAY;
                (status, Json(err)).into_response()
            }
            CreateEmbeddingsError::ServiceUnavailable(err) => {
                let status = StatusCode::SERVICE_UNAVAILABLE;
                (status, Json(err)).into_response()
            }
            CreateEmbeddingsError::Status524(err) => {
                let status =
                    { StatusCode::from_u16(524).unwrap_or(StatusCode::INTERNAL_SERVER_ERROR) };
                (status, Json(err)).into_response()
            }
            CreateEmbeddingsError::Status529(err) => {
                let status =
                    { StatusCode::from_u16(529).unwrap_or(StatusCode::INTERNAL_SERVER_ERROR) };
                (status, Json(err)).into_response()
            }
        }
    }
}

// ListEmbeddingsModels types
pub type ListEmbeddingsModelsResult =
    Result<crate::types::ModelsListResponse, ListEmbeddingsModelsError>;
#[derive(Debug)]
pub enum ListEmbeddingsModelsError {
    /// Status: Code(400)
    BadRequest(crate::types::BadRequestResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
}

impl IntoResponse for ListEmbeddingsModelsError {
    fn into_response(self) -> Response {
        match self {
            ListEmbeddingsModelsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            ListEmbeddingsModelsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Embeddings service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::embeddings::{
///     Embeddings,
///     CreateEmbeddingsResult,
///     ListEmbeddingsModelsResult,
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
/// struct EmbeddingsService {
///     // Add any dependencies your service needs
/// }
///
/// impl EmbeddingsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Embeddings<AppState> for EmbeddingsService {
///     async fn create_embeddings(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: open_router_api::types::CreateEmbeddingsRequest,
///     ) -> CreateEmbeddingsResult {
///         // Implement your business logic here
///         // Return Ok(your_createembeddingsresponse) or Err(error)
///         todo!("implement create_embeddings")
///     }
///
///     async fn list_embeddings_models(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> ListEmbeddingsModelsResult {
///         // Implement your business logic here
///         // Return Ok(your_modelslistresponse) or Err(error)
///         todo!("implement list_embeddings_models")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = EmbeddingsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Embeddings<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Post /embeddings
    fn create_embeddings(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::CreateEmbeddingsRequest,
    ) -> impl std::future::Future<Output = CreateEmbeddingsResult> + Send;

    /// Get /embeddings/models
    fn list_embeddings_models(
        &self,
        ctx: RequestContext<S>,
    ) -> impl std::future::Future<Output = ListEmbeddingsModelsResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let create_embeddings_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             Json(body): Json<crate::types::CreateEmbeddingsRequest>| async move {
                match service.create_embeddings(ctx, body).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let list_embeddings_models_handler =
            |ctx: RequestContext<S>, Extension(service): Extension<Self>| async move {
                match service.list_embeddings_models(ctx).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route("/embeddings", post(create_embeddings_handler))
            .route("/embeddings/models", get(list_embeddings_models_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
