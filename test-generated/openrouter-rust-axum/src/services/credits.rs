//! Credits service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{get, post},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

/// Bearer authentication token
#[derive(Clone, Debug)]
pub struct AuthBearer(pub String);

// Per-operation result and error types
// GetCredits types
pub type GetCreditsResult = Result<serde_json::Value, GetCreditsError>;
#[derive(Debug)]
pub enum GetCreditsError {
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(403)
    Forbidden(crate::types::ForbiddenResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for GetCreditsError {
    fn into_response(self) -> Response {
        match self {
            GetCreditsError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            GetCreditsError::Forbidden(err) => {
                let status = StatusCode::FORBIDDEN;
                (status, Json(err)).into_response()
                }
            GetCreditsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}

// CreateCoinbaseCharge types
pub type CreateCoinbaseChargeResult = Result<crate::types::CreateCoinbaseChargeResponse, CreateCoinbaseChargeError>;
#[derive(Debug)]
pub enum CreateCoinbaseChargeError {
    /// Status: Code(400)
    BadRequest(crate::types::BadRequestResponse),
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(429)
    TooManyRequests(crate::types::TooManyRequestsResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for CreateCoinbaseChargeError {
    fn into_response(self) -> Response {
        match self {
            CreateCoinbaseChargeError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            CreateCoinbaseChargeError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            CreateCoinbaseChargeError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
                }
            CreateCoinbaseChargeError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// Credits service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::credits::{
///     Credits,
///     GetCreditsResult,
///     CreateCoinbaseChargeResult,
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
/// struct CreditsService {
///     // Add any dependencies your service needs
/// }
///
/// impl CreditsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Credits<AppState> for CreditsService {
///     async fn get_credits(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> GetCreditsResult {
///         // Implement your business logic here
///         // Return Ok(your_primitive_any) or Err(error)
///         todo!("implement get_credits")
///     }
///
///     async fn create_coinbase_charge(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: open_router_api::types::CreateChargeRequest,
///     ) -> CreateCoinbaseChargeResult {
///         // Implement your business logic here
///         // Return Ok(your_createcoinbasechargeresponse) or Err(error)
///         todo!("implement create_coinbase_charge")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = CreditsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Credits<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /credits
    fn get_credits(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = GetCreditsResult> + Send;

    /// Post /credits/coinbase
    fn create_coinbase_charge(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::CreateChargeRequest,
        ) -> impl std::future::Future<Output = CreateCoinbaseChargeResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_credits_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.get_credits(
                ctx,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let create_coinbase_charge_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::CreateChargeRequest>
        | async move {
            match service.create_coinbase_charge(
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
            .route("/credits", get(get_credits_handler))
            .route("/credits/coinbase", post(create_coinbase_charge_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
