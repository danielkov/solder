//! Orders service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{delete, get, post},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

/// Bearer authentication token
#[derive(Clone, Debug)]
pub struct AuthBearer(pub String);

/// API Key authentication
#[derive(Clone, Debug)]
pub struct AuthApiKey(pub String);

// Per-operation result and error types
// ListOrders types
pub type ListOrdersResult = Result<crate::types::OrderList, ListOrdersError>;
#[derive(Debug)]
pub enum ListOrdersError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    }

impl IntoResponse for ListOrdersError {
    fn into_response(self) -> Response {
        match self {
            ListOrdersError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            ListOrdersError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            }
    }
}

// CreateOrder types
pub type CreateOrderResult = Result<crate::types::Order, CreateOrderError>;
#[derive(Debug)]
pub enum CreateOrderError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    }

impl IntoResponse for CreateOrderError {
    fn into_response(self) -> Response {
        match self {
            CreateOrderError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            CreateOrderError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            }
    }
}

// GetOrderById types
pub type GetOrderByIdResult = Result<crate::types::Order, GetOrderByIdError>;
#[derive(Debug)]
pub enum GetOrderByIdError {
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for GetOrderByIdError {
    fn into_response(self) -> Response {
        match self {
            GetOrderByIdError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            GetOrderByIdError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}

// DeleteOrder types
pub type DeleteOrderResult = Result<(), DeleteOrderError>;
#[derive(Debug)]
pub enum DeleteOrderError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for DeleteOrderError {
    fn into_response(self) -> Response {
        match self {
            DeleteOrderError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            DeleteOrderError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            DeleteOrderError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}

// CancelOrder types
pub type CancelOrderResult = Result<crate::types::Order, CancelOrderError>;
#[derive(Debug)]
pub enum CancelOrderError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for CancelOrderError {
    fn into_response(self) -> Response {
        match self {
            CancelOrderError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            CancelOrderError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            CancelOrderError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
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
/// use multi_file_reference_api::shared::RequestContext;
/// use multi_file_reference_api::services::orders::{
///     Orders,
///     ListOrdersResult,
///     ListOrdersQuery,
///     CreateOrderResult,
///     GetOrderByIdResult,
///     DeleteOrderResult,
///     CancelOrderResult,
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
///     async fn list_orders(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: ListOrdersQuery,
///     ) -> ListOrdersResult {
///         // Implement your business logic here
///         // Return Ok(your_orderlist) or Err(error)
///         todo!("implement list_orders")
///     }
///
///     async fn create_order(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: multi_file_reference_api::types::OrderCreate,
///     ) -> CreateOrderResult {
///         // Implement your business logic here
///         // Return Ok(your_order) or Err(error)
///         todo!("implement create_order")
///     }
///
///     async fn get_order_by_id(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> GetOrderByIdResult {
///         // Implement your business logic here
///         // Return Ok(your_order) or Err(error)
///         todo!("implement get_order_by_id")
///     }
///
///     async fn delete_order(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> DeleteOrderResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
///     async fn cancel_order(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: multi_file_reference_api::types::CancelOrderRequest,
///     ) -> CancelOrderResult {
///         // Implement your business logic here
///         // Return Ok(your_order) or Err(error)
///         todo!("implement cancel_order")
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
    /// Get /orders
    fn list_orders(
        &self,
        ctx: RequestContext<S>,
        query: ListOrdersQuery,
        ) -> impl std::future::Future<Output = ListOrdersResult> + Send;

    /// Post /orders
    fn create_order(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::OrderCreate,
        ) -> impl std::future::Future<Output = CreateOrderResult> + Send;

    /// Get /orders/{orderId}
    fn get_order_by_id(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = GetOrderByIdResult> + Send;

    /// Delete /orders/{orderId}
    fn delete_order(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = DeleteOrderResult> + Send;

    /// Post /orders/{orderId}/cancel
    fn cancel_order(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::CancelOrderRequest,
        ) -> impl std::future::Future<Output = CancelOrderResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let list_orders_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Query(query): axum::extract::Query<ListOrdersQuery>
        | async move {
            match service.list_orders(
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

        let create_order_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::OrderCreate>
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

        let get_order_by_id_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.get_order_by_id(
                ctx,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let delete_order_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.delete_order(
                ctx,
                ).await {
                Ok(_) => {
                    let status = StatusCode::NO_CONTENT;
                    status.into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let cancel_order_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::CancelOrderRequest>
        | async move {
            match service.cancel_order(
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
            .route("/orders", get(list_orders_handler))
            .route("/orders", post(create_order_handler))
            .route("/orders/{orderId}", get(get_order_by_id_handler))
            .route("/orders/{orderId}", delete(delete_order_handler))
            .route("/orders/{orderId}/cancel", post(cancel_order_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct ListOrdersQuery {
    pub page: Option<String>,
    pub page_size: Option<String>,
    pub user_id: Option<String>,
    pub status: Option<String>,
    pub payment_status: Option<String>,
    pub start_date: Option<String>,
    pub end_date: Option<String>,
    
}

