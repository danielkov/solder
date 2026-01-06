//! OAuth service module
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
// ExchangeAuthCodeForApiKey types
pub type ExchangeAuthCodeForApiKeyResult = Result<crate::types::ExchangeAuthCodeForApiKeyResponse, ExchangeAuthCodeForApiKeyError>;
#[derive(Debug)]
pub enum ExchangeAuthCodeForApiKeyError {
    /// Status: Code(400)
    BadRequest(crate::types::BadRequestResponse),
    /// Status: Code(403)
    Forbidden(crate::types::ForbiddenResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for ExchangeAuthCodeForApiKeyError {
    fn into_response(self) -> Response {
        match self {
            ExchangeAuthCodeForApiKeyError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            ExchangeAuthCodeForApiKeyError::Forbidden(err) => {
                let status = StatusCode::FORBIDDEN;
                (status, Json(err)).into_response()
                }
            ExchangeAuthCodeForApiKeyError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}

// CreateAuthKeysCode types
pub type CreateAuthKeysCodeResult = Result<crate::types::CreateAuthKeysCodeResponse, CreateAuthKeysCodeError>;
#[derive(Debug)]
pub enum CreateAuthKeysCodeError {
    /// Status: Code(400)
    BadRequest(crate::types::BadRequestResponse),
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for CreateAuthKeysCodeError {
    fn into_response(self) -> Response {
        match self {
            CreateAuthKeysCodeError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            CreateAuthKeysCodeError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            CreateAuthKeysCodeError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// OAuth service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::o_auth::{
///     OAuth,
///     ExchangeAuthCodeForApiKeyResult,
///     CreateAuthKeysCodeResult,
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
/// struct OAuthService {
///     // Add any dependencies your service needs
/// }
///
/// impl OAuthService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl OAuth<AppState> for OAuthService {
///     async fn exchange_auth_code_for_api_key(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: open_router_api::types::ExchangeAuthCodeForApiKeyRequest,
///     ) -> ExchangeAuthCodeForApiKeyResult {
///         // Implement your business logic here
///         // Return Ok(your_exchangeauthcodeforapikeyresponse) or Err(error)
///         todo!("implement exchange_auth_code_for_api_key")
///     }
///
///     async fn create_auth_keys_code(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: open_router_api::types::CreateAuthKeysCodeRequest,
///     ) -> CreateAuthKeysCodeResult {
///         // Implement your business logic here
///         // Return Ok(your_createauthkeyscoderesponse) or Err(error)
///         todo!("implement create_auth_keys_code")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = OAuthService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait OAuth<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Post /auth/keys
    fn exchange_auth_code_for_api_key(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::ExchangeAuthCodeForApiKeyRequest,
        ) -> impl std::future::Future<Output = ExchangeAuthCodeForApiKeyResult> + Send;

    /// Post /auth/keys/code
    fn create_auth_keys_code(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::CreateAuthKeysCodeRequest,
        ) -> impl std::future::Future<Output = CreateAuthKeysCodeResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let exchange_auth_code_for_api_key_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::ExchangeAuthCodeForApiKeyRequest>
        | async move {
            match service.exchange_auth_code_for_api_key(
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

        let create_auth_keys_code_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::CreateAuthKeysCodeRequest>
        | async move {
            match service.create_auth_keys_code(
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
            .route("/auth/keys", post(exchange_auth_code_for_api_key_handler))
            .route("/auth/keys/code", post(create_auth_keys_code_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
