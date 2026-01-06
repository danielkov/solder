//! Bookings service module
use axum::{
    Extension, Json, Router,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::{delete, get, post},
};

use crate::shared::RequestContext;

// Per-operation result and error types
// GetBookings types
pub type GetBookingsResult = Result<crate::types::GetBookingsUnion, GetBookingsError>;
#[derive(Debug)]
pub enum GetBookingsError {
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

impl IntoResponse for GetBookingsError {
    fn into_response(self) -> Response {
        match self {
            GetBookingsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            GetBookingsError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            GetBookingsError::Forbidden(err) => {
                let status = StatusCode::FORBIDDEN;
                (status, Json(err)).into_response()
            }
            GetBookingsError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
            }
            GetBookingsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
        }
    }
}

// CreateBooking types
pub type CreateBookingResult = Result<crate::types::CreateBookingUnion, CreateBookingError>;
#[derive(Debug)]
pub enum CreateBookingError {
    /// Status: Code(400)
    BadRequest(crate::types::Problem),
    /// Status: Code(401)
    Unauthorized(crate::types::Problem),
    /// Status: Code(404)
    NotFound(crate::types::Problem),
    /// Status: Code(409)
    Conflict(crate::types::Problem),
    /// Status: Code(429)
    TooManyRequests(crate::types::Problem),
    /// Status: Code(500)
    InternalServerError(crate::types::Problem),
}

impl IntoResponse for CreateBookingError {
    fn into_response(self) -> Response {
        match self {
            CreateBookingError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            CreateBookingError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            CreateBookingError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
            CreateBookingError::Conflict(err) => {
                let status = StatusCode::CONFLICT;
                (status, Json(err)).into_response()
            }
            CreateBookingError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
            }
            CreateBookingError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
        }
    }
}

// GetBooking types
pub type GetBookingResult = Result<crate::types::CreateBookingUnion, GetBookingError>;
#[derive(Debug)]
pub enum GetBookingError {
    /// Status: Code(400)
    BadRequest(crate::types::Problem),
    /// Status: Code(401)
    Unauthorized(crate::types::Problem),
    /// Status: Code(403)
    Forbidden(crate::types::Problem),
    /// Status: Code(404)
    NotFound(crate::types::Problem),
    /// Status: Code(429)
    TooManyRequests(crate::types::Problem),
    /// Status: Code(500)
    InternalServerError(crate::types::Problem),
}

impl IntoResponse for GetBookingError {
    fn into_response(self) -> Response {
        match self {
            GetBookingError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            GetBookingError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            GetBookingError::Forbidden(err) => {
                let status = StatusCode::FORBIDDEN;
                (status, Json(err)).into_response()
            }
            GetBookingError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
            GetBookingError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
            }
            GetBookingError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
        }
    }
}

// DeleteBooking types
pub type DeleteBookingResult = Result<(), DeleteBookingError>;
#[derive(Debug)]
pub enum DeleteBookingError {
    /// Status: Code(400)
    BadRequest(crate::types::Problem),
    /// Status: Code(401)
    Unauthorized(crate::types::Problem),
    /// Status: Code(403)
    Forbidden(crate::types::Problem),
    /// Status: Code(404)
    NotFound(crate::types::Problem),
    /// Status: Code(429)
    TooManyRequests(crate::types::Problem),
    /// Status: Code(500)
    InternalServerError(crate::types::Problem),
}

impl IntoResponse for DeleteBookingError {
    fn into_response(self) -> Response {
        match self {
            DeleteBookingError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            DeleteBookingError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            DeleteBookingError::Forbidden(err) => {
                let status = StatusCode::FORBIDDEN;
                (status, Json(err)).into_response()
            }
            DeleteBookingError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
            DeleteBookingError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
            }
            DeleteBookingError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Bookings service trait
///
/// # Example
///
/// ```rust
/// use train_travel_api::shared::RequestContext;
/// use train_travel_api::services::bookings::{
///     Bookings,
///     GetBookingsResult,
///     GetBookingsQuery,
///     CreateBookingResult,
///     GetBookingResult,
///     DeleteBookingResult,
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
/// struct BookingsService {
///     // Add any dependencies your service needs
/// }
///
/// impl BookingsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Bookings<AppState> for BookingsService {
///     async fn get_bookings(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: GetBookingsQuery,
///     ) -> GetBookingsResult {
///         // Implement your business logic here
///         // Return Ok(your_getbookingsunion) or Err(error)
///         todo!("implement get_bookings")
///     }
///
///     async fn create_booking(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: train_travel_api::types::Booking,
///     ) -> CreateBookingResult {
///         // Implement your business logic here
///         // Return Ok(your_createbookingunion) or Err(error)
///         todo!("implement create_booking")
///     }
///
///     async fn get_booking(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> GetBookingResult {
///         // Implement your business logic here
///         // Return Ok(your_createbookingunion) or Err(error)
///         todo!("implement get_booking")
///     }
///
///     async fn delete_booking(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> DeleteBookingResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = BookingsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Bookings<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /bookings
    fn get_bookings(
        &self,
        ctx: RequestContext<S>,
        query: GetBookingsQuery,
    ) -> impl std::future::Future<Output = GetBookingsResult> + Send;

    /// Post /bookings
    fn create_booking(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::Booking,
    ) -> impl std::future::Future<Output = CreateBookingResult> + Send;

    /// Get /bookings/{bookingId}
    fn get_booking(
        &self,
        ctx: RequestContext<S>,
    ) -> impl std::future::Future<Output = GetBookingResult> + Send;

    /// Delete /bookings/{bookingId}
    fn delete_booking(
        &self,
        ctx: RequestContext<S>,
    ) -> impl std::future::Future<Output = DeleteBookingResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_bookings_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             axum::extract::Query(query): axum::extract::Query<GetBookingsQuery>| async move {
                match service.get_bookings(ctx, query).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let create_booking_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             Json(body): Json<crate::types::Booking>| async move {
                match service.create_booking(ctx, body).await {
                    Ok(result) => {
                        let status = StatusCode::CREATED;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let get_booking_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>| async move {
            match service.get_booking(ctx).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                }
                Err(e) => e.into_response(),
            }
        };

        let delete_booking_handler =
            |ctx: RequestContext<S>, Extension(service): Extension<Self>| async move {
                match service.delete_booking(ctx).await {
                    Ok(_) => {
                        let status = StatusCode::NO_CONTENT;
                        status.into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route("/bookings", get(get_bookings_handler))
            .route("/bookings", post(create_booking_handler))
            .route("/bookings/{bookingId}", get(get_booking_handler))
            .route("/bookings/{bookingId}", delete(delete_booking_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct GetBookingsQuery {
    pub page: Option<String>,
    pub limit: Option<String>,
}
