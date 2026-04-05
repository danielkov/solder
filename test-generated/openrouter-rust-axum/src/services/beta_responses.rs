//! BetaResponses service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{post},
    Extension, Router,
};

use crate::shared::{RequestContext, ApiKey};

// Per-operation result and error types
// CreateResponses types
pub type CreateResponsesResult = Result<crate::types::OpenResponsesNonStreamingResponse, CreateResponsesError>;
#[derive(Debug)]
pub enum CreateResponsesError {
    /// Status: Code(400)
    BadRequest(crate::types::BadRequestResponse),
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(402)
    Status402(crate::types::PaymentRequiredResponse),
    /// Status: Code(404)
    NotFound(crate::types::NotFoundResponse),
    /// Status: Code(408)
    Status408(crate::types::RequestTimeoutResponse),
    /// Status: Code(413)
    Status413(crate::types::PayloadTooLargeResponse),
    /// Status: Code(422)
    UnprocessableEntity(crate::types::UnprocessableEntityResponse),
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

impl IntoResponse for CreateResponsesError {
    fn into_response(self) -> Response {
        match self {
            CreateResponsesError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::Status402(err) => {
                let status = StatusCode::PAYMENT_REQUIRED;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::Status408(err) => {
                let status = StatusCode::REQUEST_TIMEOUT;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::Status413(err) => {
                let status = StatusCode::PAYLOAD_TOO_LARGE;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::UnprocessableEntity(err) => {
                let status = StatusCode::UNPROCESSABLE_ENTITY;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::BadGateway(err) => {
                let status = StatusCode::BAD_GATEWAY;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::ServiceUnavailable(err) => {
                let status = StatusCode::SERVICE_UNAVAILABLE;
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::Status524(err) => {
                let status = { StatusCode::from_u16(524).unwrap_or(StatusCode::INTERNAL_SERVER_ERROR) };
                (status, axum::Json(err)).into_response()
                }
            CreateResponsesError::Status529(err) => {
                let status = { StatusCode::from_u16(529).unwrap_or(StatusCode::INTERNAL_SERVER_ERROR) };
                (status, axum::Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// BetaResponses service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::beta_responses::{
///     BetaResponses,
///     CreateResponsesResult,
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
/// struct BetaResponsesService {
///     // Add any dependencies your service needs
/// }
///
/// impl BetaResponsesService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl BetaResponses<AppState> for BetaResponsesService {
///     async fn create_responses(
///         &self,
///         ctx: RequestContext<AppState>,
///         auth: ApiKey,
///         body: open_router_api::types::OpenResponsesRequest,
///     ) -> CreateResponsesResult {
///         // Implement your business logic here
///         // Return Ok(your_openresponsesnonstreamingresponse) or Err(error)
///         todo!("implement create_responses")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = BetaResponsesService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait BetaResponses<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Post /responses
    fn create_responses(
        &self,
        ctx: RequestContext<S>,
        auth: ApiKey,
        body: crate::types::OpenResponsesRequest,
        ) -> impl std::future::Future<Output = CreateResponsesResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let create_responses_handler = |ctx: RequestContext<S>, auth: ApiKey, Extension(service): Extension<Self>, axum::Json(body): axum::Json<crate::types::OpenResponsesRequest>
        | async move {
            match service.create_responses(
                ctx,
                auth,
                body,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, axum::Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        Router::new()
            .route("/responses", post(create_responses_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
