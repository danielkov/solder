//! Analytics service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{get},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

/// Bearer authentication token
#[derive(Clone, Debug)]
pub struct AuthBearer(pub String);

// Per-operation result and error types
// GetUserActivity types
pub type GetUserActivityResult = Result<crate::types::GetUserActivityResponse, GetUserActivityError>;
#[derive(Debug)]
pub enum GetUserActivityError {
    /// Status: Code(400)
    BadRequest(crate::types::BadRequestResponse),
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(403)
    Forbidden(crate::types::ForbiddenResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for GetUserActivityError {
    fn into_response(self) -> Response {
        match self {
            GetUserActivityError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            GetUserActivityError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            GetUserActivityError::Forbidden(err) => {
                let status = StatusCode::FORBIDDEN;
                (status, Json(err)).into_response()
                }
            GetUserActivityError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// Analytics service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::analytics::{
///     Analytics,
///     GetUserActivityResult,
///     GetUserActivityQuery,
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
/// struct AnalyticsService {
///     // Add any dependencies your service needs
/// }
///
/// impl AnalyticsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Analytics<AppState> for AnalyticsService {
///     async fn get_user_activity(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: GetUserActivityQuery,
///     ) -> GetUserActivityResult {
///         // Implement your business logic here
///         // Return Ok(your_getuseractivityresponse) or Err(error)
///         todo!("implement get_user_activity")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = AnalyticsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Analytics<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /activity
    fn get_user_activity(
        &self,
        ctx: RequestContext<S>,
        query: GetUserActivityQuery,
        ) -> impl std::future::Future<Output = GetUserActivityResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_user_activity_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Query(query): axum::extract::Query<GetUserActivityQuery>
        | async move {
            match service.get_user_activity(
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

        Router::new()
            .route("/activity", get(get_user_activity_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct GetUserActivityQuery {
    pub date: Option<String>,
    
}

