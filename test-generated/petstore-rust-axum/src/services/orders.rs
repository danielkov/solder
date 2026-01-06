//! Orders service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{post},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

// Per-operation result and error types
// CreateOrder types
pub type CreateOrderResult = Result<crate::types::Order, CreateOrderError>;
#[derive(Debug)]
pub enum CreateOrderError {
    InternalError(String),
    }

impl IntoResponse for CreateOrderError {
    fn into_response(self) -> Response {
        match self {
            CreateOrderError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
            }
    }
}



// Multipart request structs


/// Orders service trait
///
/// # Example
///
/// ```rust
/// use pet_store_api::shared::RequestContext;
/// use pet_store_api::services::orders::{
///     Orders,
///     CreateOrderResult,
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
/// struct OrdersService {
///     // Add any dependencies your service needs
/// }
///
/// impl OrdersService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Orders<AppState> for OrdersService {
///     async fn create_order(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: pet_store_api::types::NewOrder,
///     ) -> CreateOrderResult {
///         // Implement your business logic here
///         // Return Ok(your_order) or Err(error)
///         todo!("implement create_order")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = OrdersService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Orders<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Post /orders
    fn create_order(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::NewOrder,
        ) -> impl std::future::Future<Output = CreateOrderResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let create_order_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::NewOrder>
        | async move {
            match service.create_order(
                ctx,
                body,
                ).await {
                Ok(result) => {
                    let status = StatusCode::CREATED;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        Router::new()
            .route("/orders", post(create_order_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
