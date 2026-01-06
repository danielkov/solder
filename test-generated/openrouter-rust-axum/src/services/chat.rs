//! Chat service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{post},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

/// Bearer authentication token
#[derive(Clone, Debug)]
pub struct AuthBearer(pub String);

// Per-operation result and error types
// SendChatCompletionRequest types
pub type SendChatCompletionRequestResult = Result<crate::types::ChatResponse, SendChatCompletionRequestError>;
#[derive(Debug)]
pub enum SendChatCompletionRequestError {
    /// Status: Code(400)
    BadRequest(crate::types::ChatError),
    /// Status: Code(401)
    Unauthorized(crate::types::ChatError),
    /// Status: Code(429)
    TooManyRequests(crate::types::ChatError),
    /// Status: Code(500)
    InternalServerError(crate::types::ChatError),
    }

impl IntoResponse for SendChatCompletionRequestError {
    fn into_response(self) -> Response {
        match self {
            SendChatCompletionRequestError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            SendChatCompletionRequestError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            SendChatCompletionRequestError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
                }
            SendChatCompletionRequestError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// Chat service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::chat::{
///     Chat,
///     SendChatCompletionRequestResult,
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
/// struct ChatService {
///     // Add any dependencies your service needs
/// }
///
/// impl ChatService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Chat<AppState> for ChatService {
///     async fn send_chat_completion_request(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: open_router_api::types::ChatGenerationParams,
///     ) -> SendChatCompletionRequestResult {
///         // Implement your business logic here
///         // Return Ok(your_chatresponse) or Err(error)
///         todo!("implement send_chat_completion_request")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = ChatService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Chat<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Post /chat/completions
    fn send_chat_completion_request(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::ChatGenerationParams,
        ) -> impl std::future::Future<Output = SendChatCompletionRequestResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let send_chat_completion_request_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::ChatGenerationParams>
        | async move {
            match service.send_chat_completion_request(
                ctx,
                body,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        Router::new()
            .route("/chat/completions", post(send_chat_completion_request_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
