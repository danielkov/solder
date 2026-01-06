//! Operations service module
use axum::{
    Extension, Json, Router,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::get,
};

use crate::shared::RequestContext;

// Per-operation result and error types
// GetMuseumHours types
pub type GetMuseumHoursResult = Result<crate::types::MuseumHours, GetMuseumHoursError>;
#[derive(Debug)]
pub enum GetMuseumHoursError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
}

impl IntoResponse for GetMuseumHoursError {
    fn into_response(self) -> Response {
        match self {
            GetMuseumHoursError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            GetMuseumHoursError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Operations service trait
///
/// # Example
///
/// ```rust
/// use redocly_museum_api::shared::RequestContext;
/// use redocly_museum_api::services::operations::{
///     Operations,
///     GetMuseumHoursResult,
///     GetMuseumHoursQuery,
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
/// struct OperationsService {
///     // Add any dependencies your service needs
/// }
///
/// impl OperationsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Operations<AppState> for OperationsService {
///     async fn get_museum_hours(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: GetMuseumHoursQuery,
///     ) -> GetMuseumHoursResult {
///         // Implement your business logic here
///         // Return Ok(your_museumhours) or Err(error)
///         todo!("implement get_museum_hours")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = OperationsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Operations<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /museum-hours
    fn get_museum_hours(
        &self,
        ctx: RequestContext<S>,
        query: GetMuseumHoursQuery,
    ) -> impl std::future::Future<Output = GetMuseumHoursResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_museum_hours_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             axum::extract::Query(query): axum::extract::Query<GetMuseumHoursQuery>| async move {
                match service.get_museum_hours(ctx, query).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route("/museum-hours", get(get_museum_hours_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct GetMuseumHoursQuery {
    pub start_date: Option<String>,
    pub page: Option<String>,
    pub limit: Option<String>,
}
