//! Endpoints service module
use axum::{
    Extension, Json, Router,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::get,
};

use crate::shared::RequestContext;

/// Bearer authentication token
#[derive(Clone, Debug)]
pub struct AuthBearer(pub String);

// Per-operation result and error types
// ListEndpointsZdr types
pub type ListEndpointsZdrResult =
    Result<crate::types::ListEndpointsZdrResponse, ListEndpointsZdrError>;
#[derive(Debug)]
pub enum ListEndpointsZdrError {
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
}

impl IntoResponse for ListEndpointsZdrError {
    fn into_response(self) -> Response {
        match self {
            ListEndpointsZdrError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
        }
    }
}

// ListEndpoints types
pub type ListEndpointsResult =
    Result<crate::types::EndpointsListEndpointsResponse, ListEndpointsError>;
#[derive(Debug)]
pub enum ListEndpointsError {
    /// Status: Code(404)
    NotFound(crate::types::NotFoundResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
}

impl IntoResponse for ListEndpointsError {
    fn into_response(self) -> Response {
        match self {
            ListEndpointsError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
            ListEndpointsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Endpoints service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::endpoints::{
///     Endpoints,
///     ListEndpointsZdrResult,
///     ListEndpointsResult,
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
/// struct EndpointsService {
///     // Add any dependencies your service needs
/// }
///
/// impl EndpointsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Endpoints<AppState> for EndpointsService {
///     async fn list_endpoints_zdr(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> ListEndpointsZdrResult {
///         // Implement your business logic here
///         // Return Ok(your_listendpointszdrresponse) or Err(error)
///         todo!("implement list_endpoints_zdr")
///     }
///
///     async fn list_endpoints(
///         &self,
///         ctx: RequestContext<AppState>,
///         author: String,
///         slug: String,
///     ) -> ListEndpointsResult {
///         // Implement your business logic here
///         // Return Ok(your_endpointslistendpointsresponse) or Err(error)
///         todo!("implement list_endpoints")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = EndpointsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Endpoints<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /endpoints/zdr
    fn list_endpoints_zdr(
        &self,
        ctx: RequestContext<S>,
    ) -> impl std::future::Future<Output = ListEndpointsZdrResult> + Send;

    /// Get /models/{author}/{slug}/endpoints
    fn list_endpoints(
        &self,
        ctx: RequestContext<S>,
        author: String,
        slug: String,
    ) -> impl std::future::Future<Output = ListEndpointsResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let list_endpoints_zdr_handler =
            |ctx: RequestContext<S>, Extension(service): Extension<Self>| async move {
                match service.list_endpoints_zdr(ctx).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let list_endpoints_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             axum::extract::Path(path_params): axum::extract::Path<(String, String)>| async move {
                let (author, slug) = path_params;
                match service.list_endpoints(ctx, author, slug).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route("/endpoints/zdr", get(list_endpoints_zdr_handler))
            .route(
                "/models/{author}/{slug}/endpoints",
                get(list_endpoints_handler),
            )
            .layer(Extension(self))
    }
}

// Query parameter structs
