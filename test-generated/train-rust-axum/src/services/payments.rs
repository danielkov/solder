//! Payments service module
use axum::{
    Extension, Router,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::post,
};

use crate::shared::{Auth, RequestContext};

// Per-operation result and error types
// CreateBookingPayment types
pub type CreateBookingPaymentResult =
    Result<crate::types::CreateBookingPaymentUnion, CreateBookingPaymentError>;
#[derive(Debug)]
pub enum CreateBookingPaymentError {
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

impl IntoResponse for CreateBookingPaymentError {
    fn into_response(self) -> Response {
        match self {
            CreateBookingPaymentError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, axum::Json(err)).into_response()
            }
            CreateBookingPaymentError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, axum::Json(err)).into_response()
            }
            CreateBookingPaymentError::Forbidden(err) => {
                let status = StatusCode::FORBIDDEN;
                (status, axum::Json(err)).into_response()
            }
            CreateBookingPaymentError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, axum::Json(err)).into_response()
            }
            CreateBookingPaymentError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, axum::Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Payments service trait
///
/// # Example
///
/// ```rust
/// use train_travel_api::shared::RequestContext;
/// use train_travel_api::services::payments::{
///     Payments,
///     CreateBookingPaymentResult,
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
/// struct PaymentsService {
///     // Add any dependencies your service needs
/// }
///
/// impl PaymentsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Payments<AppState> for PaymentsService {
///     async fn create_booking_payment(
///         &self,
///         ctx: RequestContext<AppState>,
///         auth: Auth,
///         body: train_travel_api::types::BookingPayment,
///     ) -> CreateBookingPaymentResult {
///         // Implement your business logic here
///         // Return Ok(your_createbookingpaymentunion) or Err(error)
///         todo!("implement create_booking_payment")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = PaymentsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Payments<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Post /bookings/{bookingId}/payment
    fn create_booking_payment(
        &self,
        ctx: RequestContext<S>,
        auth: Auth,
        body: crate::types::BookingPayment,
    ) -> impl std::future::Future<Output = CreateBookingPaymentResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let create_booking_payment_handler =
            |ctx: RequestContext<S>,
             auth: Auth,
             Extension(service): Extension<Self>,
             axum::Json(body): axum::Json<crate::types::BookingPayment>| async move {
                match service.create_booking_payment(ctx, auth, body).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, axum::Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route(
                "/bookings/{bookingId}/payment",
                post(create_booking_payment_handler),
            )
            .layer(Extension(self))
    }
}

// Query parameter structs
