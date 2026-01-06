//! Stations service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{get},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

// Per-operation result and error types
// GetStations types
pub type GetStationsResult = Result<crate::types::GetStationsUnion, GetStationsError>;
#[derive(Debug)]
pub enum GetStationsError {
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

impl IntoResponse for GetStationsError {
    fn into_response(self) -> Response {
        match self {
            GetStationsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            GetStationsError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            GetStationsError::Forbidden(err) => {
                let status = StatusCode::FORBIDDEN;
                (status, Json(err)).into_response()
                }
            GetStationsError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
                }
            GetStationsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// Stations service trait
///
/// # Example
///
/// ```rust
/// use train_travel_api::shared::RequestContext;
/// use train_travel_api::services::stations::{
///     Stations,
///     GetStationsResult,
///     GetStationsQuery,
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
/// struct StationsService {
///     // Add any dependencies your service needs
/// }
///
/// impl StationsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Stations<AppState> for StationsService {
///     async fn get_stations(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: GetStationsQuery,
///     ) -> GetStationsResult {
///         // Implement your business logic here
///         // Return Ok(your_getstationsunion) or Err(error)
///         todo!("implement get_stations")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = StationsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Stations<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /stations
    fn get_stations(
        &self,
        ctx: RequestContext<S>,
        query: GetStationsQuery,
        ) -> impl std::future::Future<Output = GetStationsResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_stations_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Query(query): axum::extract::Query<GetStationsQuery>
        | async move {
            match service.get_stations(
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
            .route("/stations", get(get_stations_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct GetStationsQuery {
    pub page: Option<String>,
    pub limit: Option<String>,
    pub coordinates: Option<String>,
    pub search: Option<String>,
    pub country: Option<String>,
    
}

