//! Faq service module
use axum::{
    Extension, Json, Router,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::get,
};

use crate::shared::RequestContext;

// Per-operation result and error types
// ListFaqItems types
pub type ListFaqItemsResult = Result<crate::types::FaqList, ListFaqItemsError>;
#[derive(Debug)]
pub enum ListFaqItemsError {
    /// Status: Code(500)
    InternalServerError(crate::types::HttpError),
}

impl IntoResponse for ListFaqItemsError {
    fn into_response(self) -> Response {
        match self {
            ListFaqItemsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
        }
    }
}

// GetFaqItem types
pub type GetFaqItemResult = Result<crate::types::FaqItem, GetFaqItemError>;
#[derive(Debug)]
pub enum GetFaqItemError {
    /// Status: Code(404)
    NotFound(crate::types::HttpError),
}

impl IntoResponse for GetFaqItemError {
    fn into_response(self) -> Response {
        match self {
            GetFaqItemError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Faq service trait
///
/// # Example
///
/// ```rust
/// use pet_store_api::shared::RequestContext;
/// use pet_store_api::services::faq::{
///     Faq,
///     ListFaqItemsResult,
///     ListFaqItemsQuery,
///     GetFaqItemResult,
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
/// struct FaqService {
///     // Add any dependencies your service needs
/// }
///
/// impl FaqService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Faq<AppState> for FaqService {
///     async fn list_faq_items(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: ListFaqItemsQuery,
///     ) -> ListFaqItemsResult {
///         // Implement your business logic here
///         // Return Ok(your_faqlist) or Err(error)
///         todo!("implement list_faq_items")
///     }
///
///     async fn get_faq_item(
///         &self,
///         ctx: RequestContext<AppState>,
///         id: String,
///     ) -> GetFaqItemResult {
///         // Implement your business logic here
///         // Return Ok(your_faqitem) or Err(error)
///         todo!("implement get_faq_item")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = FaqService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Faq<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /faq
    fn list_faq_items(
        &self,
        ctx: RequestContext<S>,
        query: ListFaqItemsQuery,
    ) -> impl std::future::Future<Output = ListFaqItemsResult> + Send;

    /// Get /faq/{id}
    fn get_faq_item(
        &self,
        ctx: RequestContext<S>,
        id: String,
    ) -> impl std::future::Future<Output = GetFaqItemResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let list_faq_items_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             axum::extract::Query(query): axum::extract::Query<ListFaqItemsQuery>| async move {
                match service.list_faq_items(ctx, query).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let get_faq_item_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             axum::extract::Path(path_params): axum::extract::Path<String>| async move {
                let id = path_params;
                match service.get_faq_item(ctx, id).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route("/faq", get(list_faq_items_handler))
            .route("/faq/{id}", get(get_faq_item_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct ListFaqItemsQuery {
    pub category: Option<String>,
}
