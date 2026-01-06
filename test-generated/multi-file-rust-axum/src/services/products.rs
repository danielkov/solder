//! Products service module
use axum::{
    Extension, Json, Router,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::{delete, get, post, put},
};

use crate::shared::RequestContext;

/// Bearer authentication token
#[derive(Clone, Debug)]
pub struct AuthBearer(pub String);

/// API Key authentication
#[derive(Clone, Debug)]
pub struct AuthApiKey(pub String);

// Per-operation result and error types
// ListProducts types
pub type ListProductsResult = Result<crate::types::ProductList, ListProductsError>;
#[derive(Debug)]
pub enum ListProductsError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
}

impl IntoResponse for ListProductsError {
    fn into_response(self) -> Response {
        match self {
            ListProductsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            ListProductsError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
        }
    }
}

// CreateProduct types
pub type CreateProductResult = Result<crate::types::Product, CreateProductError>;
#[derive(Debug)]
pub enum CreateProductError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(409)
    Conflict(crate::types::Error),
}

impl IntoResponse for CreateProductError {
    fn into_response(self) -> Response {
        match self {
            CreateProductError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            CreateProductError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            CreateProductError::Conflict(err) => {
                let status = StatusCode::CONFLICT;
                (status, Json(err)).into_response()
            }
        }
    }
}

// GetProductById types
pub type GetProductByIdResult = Result<crate::types::Product, GetProductByIdError>;
#[derive(Debug)]
pub enum GetProductByIdError {
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
}

impl IntoResponse for GetProductByIdError {
    fn into_response(self) -> Response {
        match self {
            GetProductByIdError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            GetProductByIdError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
        }
    }
}

// UpdateProduct types
pub type UpdateProductResult = Result<crate::types::Product, UpdateProductError>;
#[derive(Debug)]
pub enum UpdateProductError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
}

impl IntoResponse for UpdateProductError {
    fn into_response(self) -> Response {
        match self {
            UpdateProductError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            UpdateProductError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            UpdateProductError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
        }
    }
}

// DeleteProduct types
pub type DeleteProductResult = Result<(), DeleteProductError>;
#[derive(Debug)]
pub enum DeleteProductError {
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
}

impl IntoResponse for DeleteProductError {
    fn into_response(self) -> Response {
        match self {
            DeleteProductError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            DeleteProductError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
        }
    }
}

// UpdateProductInventory types
pub type UpdateProductInventoryResult = Result<crate::types::Product, UpdateProductInventoryError>;
#[derive(Debug)]
pub enum UpdateProductInventoryError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
}

impl IntoResponse for UpdateProductInventoryError {
    fn into_response(self) -> Response {
        match self {
            UpdateProductInventoryError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            UpdateProductInventoryError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            UpdateProductInventoryError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Products service trait
///
/// # Example
///
/// ```rust
/// use multi_file_reference_api::shared::RequestContext;
/// use multi_file_reference_api::services::products::{
///     Products,
///     ListProductsResult,
///     ListProductsQuery,
///     CreateProductResult,
///     GetProductByIdResult,
///     UpdateProductResult,
///     DeleteProductResult,
///     UpdateProductInventoryResult,
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
/// struct ProductsService {
///     // Add any dependencies your service needs
/// }
///
/// impl ProductsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Products<AppState> for ProductsService {
///     async fn list_products(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: ListProductsQuery,
///     ) -> ListProductsResult {
///         // Implement your business logic here
///         // Return Ok(your_productlist) or Err(error)
///         todo!("implement list_products")
///     }
///
///     async fn create_product(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: multi_file_reference_api::types::ProductCreate,
///     ) -> CreateProductResult {
///         // Implement your business logic here
///         // Return Ok(your_product) or Err(error)
///         todo!("implement create_product")
///     }
///
///     async fn get_product_by_id(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> GetProductByIdResult {
///         // Implement your business logic here
///         // Return Ok(your_product) or Err(error)
///         todo!("implement get_product_by_id")
///     }
///
///     async fn update_product(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: multi_file_reference_api::types::ProductUpdate,
///     ) -> UpdateProductResult {
///         // Implement your business logic here
///         // Return Ok(your_product) or Err(error)
///         todo!("implement update_product")
///     }
///
///     async fn delete_product(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> DeleteProductResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
///     async fn update_product_inventory(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: multi_file_reference_api::types::InventoryUpdate,
///     ) -> UpdateProductInventoryResult {
///         // Implement your business logic here
///         // Return Ok(your_product) or Err(error)
///         todo!("implement update_product_inventory")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = ProductsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Products<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /products
    fn list_products(
        &self,
        ctx: RequestContext<S>,
        query: ListProductsQuery,
    ) -> impl std::future::Future<Output = ListProductsResult> + Send;

    /// Post /products
    fn create_product(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::ProductCreate,
    ) -> impl std::future::Future<Output = CreateProductResult> + Send;

    /// Get /products/{productId}
    fn get_product_by_id(
        &self,
        ctx: RequestContext<S>,
    ) -> impl std::future::Future<Output = GetProductByIdResult> + Send;

    /// Put /products/{productId}
    fn update_product(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::ProductUpdate,
    ) -> impl std::future::Future<Output = UpdateProductResult> + Send;

    /// Delete /products/{productId}
    fn delete_product(
        &self,
        ctx: RequestContext<S>,
    ) -> impl std::future::Future<Output = DeleteProductResult> + Send;

    /// Put /products/{productId}/inventory
    fn update_product_inventory(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::InventoryUpdate,
    ) -> impl std::future::Future<Output = UpdateProductInventoryResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let list_products_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             axum::extract::Query(query): axum::extract::Query<ListProductsQuery>| async move {
                match service.list_products(ctx, query).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let create_product_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             Json(body): Json<crate::types::ProductCreate>| async move {
                match service.create_product(ctx, body).await {
                    Ok(result) => {
                        let status = StatusCode::CREATED;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let get_product_by_id_handler =
            |ctx: RequestContext<S>, Extension(service): Extension<Self>| async move {
                match service.get_product_by_id(ctx).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let update_product_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             Json(body): Json<crate::types::ProductUpdate>| async move {
                match service.update_product(ctx, body).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let delete_product_handler =
            |ctx: RequestContext<S>, Extension(service): Extension<Self>| async move {
                match service.delete_product(ctx).await {
                    Ok(_) => {
                        let status = StatusCode::NO_CONTENT;
                        status.into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let update_product_inventory_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             Json(body): Json<crate::types::InventoryUpdate>| async move {
                match service.update_product_inventory(ctx, body).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route("/products", get(list_products_handler))
            .route("/products", post(create_product_handler))
            .route("/products/{productId}", get(get_product_by_id_handler))
            .route("/products/{productId}", put(update_product_handler))
            .route("/products/{productId}", delete(delete_product_handler))
            .route(
                "/products/{productId}/inventory",
                put(update_product_inventory_handler),
            )
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct ListProductsQuery {
    pub page: Option<String>,
    pub page_size: Option<String>,
    pub category: Option<String>,
    pub status: Option<String>,
    pub min_price: Option<String>,
    pub max_price: Option<String>,
    pub search: Option<String>,
    pub tags: Option<String>,
}
