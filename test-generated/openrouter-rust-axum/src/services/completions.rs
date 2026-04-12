//! Completions service module
use axum::{
    Extension, Router,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::post,
};

use crate::shared::{ApiKey, RequestContext};

// Per-operation result and error types
// CreateCompletions types
pub type CreateCompletionsResult = Result<crate::types::CompletionResponse, CreateCompletionsError>;
#[derive(Debug)]
pub enum CreateCompletionsError {
    /// Status: Code(400)
    BadRequest(crate::types::ChatError),
    /// Status: Code(401)
    Unauthorized(crate::types::ChatError),
    /// Status: Code(429)
    TooManyRequests(crate::types::ChatError),
    /// Status: Code(500)
    InternalServerError(crate::types::ChatError),
}

impl IntoResponse for CreateCompletionsError {
    fn into_response(self) -> Response {
        match self {
            CreateCompletionsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, axum::Json(err)).into_response()
            }
            CreateCompletionsError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, axum::Json(err)).into_response()
            }
            CreateCompletionsError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, axum::Json(err)).into_response()
            }
            CreateCompletionsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, axum::Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Completions service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::completions::{
///     Completions,
///     CreateCompletionsResult,
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
/// struct CompletionsService {
///     // Add any dependencies your service needs
/// }
///
/// impl CompletionsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Completions<AppState> for CompletionsService {
///     async fn create_completions(
///         &self,
///         ctx: RequestContext<AppState>,
///         auth: ApiKey,
///         body: open_router_api::types::CompletionCreateParams,
///     ) -> CreateCompletionsResult {
///         // Implement your business logic here
///         // Return Ok(your_completionresponse) or Err(error)
///         todo!("implement create_completions")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = CompletionsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Completions<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Post /completions
    fn create_completions(
        &self,
        ctx: RequestContext<S>,
        auth: ApiKey,
        body: crate::types::CompletionCreateParams,
    ) -> impl std::future::Future<Output = CreateCompletionsResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let create_completions_handler =
            |ctx: RequestContext<S>,
             auth: ApiKey,
             Extension(service): Extension<Self>,
             axum::Json(body): axum::Json<crate::types::CompletionCreateParams>| async move {
                match service.create_completions(ctx, auth, body).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, axum::Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route("/completions", post(create_completions_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
