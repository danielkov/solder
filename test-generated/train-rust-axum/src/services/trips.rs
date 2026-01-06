//! Trips service module
use axum::{
    Extension, Json, Router,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::get,
};

use crate::shared::RequestContext;

// Per-operation result and error types
// GetTrips types
pub type GetTripsResult = Result<crate::types::GetTripsUnion, GetTripsError>;
#[derive(Debug)]
pub enum GetTripsError {
    /// Status: Code(400)
    BadRequest(crate::types::Problem),
    /// Status: Code(401)
    Unauthorized(crate::types::Problem),
    /// Status: Code(403)
    Forbidden(crate::types::Problem),
    /// Status: Code(429)
    TooManyRequests(crate::types::Problem),
    /// Status: Code(500)
    InternalServerError(crate::types::Problem),
}

impl IntoResponse for GetTripsError {
    fn into_response(self) -> Response {
        match self {
            GetTripsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            GetTripsError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            GetTripsError::Forbidden(err) => {
                let status = StatusCode::FORBIDDEN;
                (status, Json(err)).into_response()
            }
            GetTripsError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
            }
            GetTripsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Trips service trait
///
/// # Example
///
/// ```rust
/// use train_travel_api::shared::RequestContext;
/// use train_travel_api::services::trips::{
///     Trips,
///     GetTripsResult,
///     GetTripsQuery,
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
/// struct TripsService {
///     // Add any dependencies your service needs
/// }
///
/// impl TripsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Trips<AppState> for TripsService {
///     async fn get_trips(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: GetTripsQuery,
///     ) -> GetTripsResult {
///         // Implement your business logic here
///         // Return Ok(your_gettripsunion) or Err(error)
///         todo!("implement get_trips")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = TripsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Trips<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /trips
    fn get_trips(
        &self,
        ctx: RequestContext<S>,
        query: GetTripsQuery,
    ) -> impl std::future::Future<Output = GetTripsResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_trips_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             axum::extract::Query(query): axum::extract::Query<GetTripsQuery>| async move {
                match service.get_trips(ctx, query).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route("/trips", get(get_trips_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct GetTripsQuery {
    pub page: Option<String>,
    pub limit: Option<String>,
    pub origin: String,
    pub destination: String,
    pub date: String,
    pub bicycles: Option<String>,
    pub dogs: Option<String>,
}
