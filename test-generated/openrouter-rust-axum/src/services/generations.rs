//! Generations service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{get},
    Extension, Router,
};

use crate::shared::{RequestContext, ApiKey};

// Per-operation result and error types
// GetGeneration types
pub type GetGenerationResult = Result<crate::types::GetGenerationResponse, GetGenerationError>;
#[derive(Debug)]
pub enum GetGenerationError {
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
    /// Status: Code(524)
    Status524(crate::types::EdgeNetworkTimeoutResponse),
    /// Status: Code(529)
    Status529(crate::types::ProviderOverloadedResponse),
    }

impl IntoResponse for GetGenerationError {
    fn into_response(self) -> Response {
        match self {
            GetGenerationError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, axum::Json(err)).into_response()
                }
            GetGenerationError::Status402(err) => {
                let status = StatusCode::PAYMENT_REQUIRED;
                (status, axum::Json(err)).into_response()
                }
            GetGenerationError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, axum::Json(err)).into_response()
                }
            GetGenerationError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, axum::Json(err)).into_response()
                }
            GetGenerationError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, axum::Json(err)).into_response()
                }
            GetGenerationError::BadGateway(err) => {
                let status = StatusCode::BAD_GATEWAY;
                (status, axum::Json(err)).into_response()
                }
            GetGenerationError::Status524(err) => {
                let status = { StatusCode::from_u16(524).unwrap_or(StatusCode::INTERNAL_SERVER_ERROR) };
                (status, axum::Json(err)).into_response()
                }
            GetGenerationError::Status529(err) => {
                let status = { StatusCode::from_u16(529).unwrap_or(StatusCode::INTERNAL_SERVER_ERROR) };
                (status, axum::Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// Generations service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::generations::{
///     Generations,
///     GetGenerationResult,
///     GetGenerationQuery,
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
/// struct GenerationsService {
///     // Add any dependencies your service needs
/// }
///
/// impl GenerationsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Generations<AppState> for GenerationsService {
///     async fn get_generation(
///         &self,
///         ctx: RequestContext<AppState>,
///         auth: ApiKey,
///         query: GetGenerationQuery,
///     ) -> GetGenerationResult {
///         // Implement your business logic here
///         // Return Ok(your_getgenerationresponse) or Err(error)
///         todo!("implement get_generation")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = GenerationsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Generations<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /generation
    fn get_generation(
        &self,
        ctx: RequestContext<S>,
        auth: ApiKey,
        query: GetGenerationQuery,
        ) -> impl std::future::Future<Output = GetGenerationResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_generation_handler = |ctx: RequestContext<S>, auth: ApiKey, Extension(service): Extension<Self>, axum::extract::Query(query): axum::extract::Query<GetGenerationQuery>
        | async move {
            match service.get_generation(
                ctx,
                auth,
                query,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, axum::Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        Router::new()
            .route("/generation", get(get_generation_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct GetGenerationQuery {
    pub id: String,
    
}

