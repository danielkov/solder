//! Default service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{get},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

// Per-operation result and error types
// GetRatings types
pub type GetRatingsResult = Result<crate::types::RatingSummary, GetRatingsError>;
#[derive(Debug)]
pub enum GetRatingsError {
    InternalError(String),
    }

impl IntoResponse for GetRatingsError {
    fn into_response(self) -> Response {
        match self {
            GetRatingsError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
            }
    }
}

// GetTest types
pub type GetTestResult = Result<crate::types::TestResponse, GetTestError>;
#[derive(Debug)]
pub enum GetTestError {
    InternalError(String),
    }

impl IntoResponse for GetTestError {
    fn into_response(self) -> Response {
        match self {
            GetTestError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
            }
    }
}



// Multipart request structs


/// Default service trait
///
/// # Example
///
/// ```rust
/// use oas_gen_bug_reproduction::shared::RequestContext;
/// use oas_gen_bug_reproduction::services::default::{
///     Default,
///     GetRatingsResult,
///     GetTestResult,
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
/// struct DefaultService {
///     // Add any dependencies your service needs
/// }
///
/// impl DefaultService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Default<AppState> for DefaultService {
///     async fn get_ratings(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> GetRatingsResult {
///         // Implement your business logic here
///         // Return Ok(your_ratingsummary) or Err(error)
///         todo!("implement get_ratings")
///     }
///
///     async fn get_test(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> GetTestResult {
///         // Implement your business logic here
///         // Return Ok(your_testresponse) or Err(error)
///         todo!("implement get_test")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = DefaultService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Default<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /ratings
    fn get_ratings(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = GetRatingsResult> + Send;

    /// Get /test
    fn get_test(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = GetTestResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_ratings_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.get_ratings(
                ctx,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let get_test_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.get_test(
                ctx,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        Router::new()
            .route("/ratings", get(get_ratings_handler))
            .route("/test", get(get_test_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
