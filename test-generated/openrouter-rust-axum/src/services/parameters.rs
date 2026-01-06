//! Parameters service module
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
// GetParameters types
pub type GetParametersResult = Result<crate::types::GetParametersResponse, GetParametersError>;
#[derive(Debug)]
pub enum GetParametersError {
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(404)
    NotFound(crate::types::NotFoundResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
}

impl IntoResponse for GetParametersError {
    fn into_response(self) -> Response {
        match self {
            GetParametersError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            GetParametersError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
            GetParametersError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Parameters service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::parameters::{
///     Parameters,
///     GetParametersResult,
///     GetParametersQuery,
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
/// struct ParametersService {
///     // Add any dependencies your service needs
/// }
///
/// impl ParametersService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Parameters<AppState> for ParametersService {
///     async fn get_parameters(
///         &self,
///         ctx: RequestContext<AppState>,
///         author: String,
///         slug: String,
///         query: GetParametersQuery,
///     ) -> GetParametersResult {
///         // Implement your business logic here
///         // Return Ok(your_getparametersresponse) or Err(error)
///         todo!("implement get_parameters")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = ParametersService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Parameters<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /parameters/{author}/{slug}
    fn get_parameters(
        &self,
        ctx: RequestContext<S>,
        author: String,
        slug: String,
        query: GetParametersQuery,
    ) -> impl std::future::Future<Output = GetParametersResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_parameters_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             axum::extract::Path(path_params): axum::extract::Path<(String, String)>,
             axum::extract::Query(query): axum::extract::Query<GetParametersQuery>| async move {
                let (author, slug) = path_params;
                match service.get_parameters(ctx, author, slug, query).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        Router::new()
            .route("/parameters/{author}/{slug}", get(get_parameters_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct GetParametersQuery {
    pub provider: Option<String>,
}
