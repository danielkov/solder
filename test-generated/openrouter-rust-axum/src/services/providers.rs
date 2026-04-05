//! Providers service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{get},
    Extension, Router,
};

use crate::shared::{RequestContext, ApiKey};

// Per-operation result and error types
// ListProviders types
pub type ListProvidersResult = Result<crate::types::ListProvidersResponse, ListProvidersError>;
#[derive(Debug)]
pub enum ListProvidersError {
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for ListProvidersError {
    fn into_response(self) -> Response {
        match self {
            ListProvidersError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, axum::Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// Providers service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::providers::{
///     Providers,
///     ListProvidersResult,
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
/// struct ProvidersService {
///     // Add any dependencies your service needs
/// }
///
/// impl ProvidersService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Providers<AppState> for ProvidersService {
///     async fn list_providers(
///         &self,
///         ctx: RequestContext<AppState>,
///         auth: ApiKey,
///     ) -> ListProvidersResult {
///         // Implement your business logic here
///         // Return Ok(your_listprovidersresponse) or Err(error)
///         todo!("implement list_providers")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = ProvidersService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Providers<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /providers
    fn list_providers(
        &self,
        ctx: RequestContext<S>,
        auth: ApiKey,
        ) -> impl std::future::Future<Output = ListProvidersResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let list_providers_handler = |ctx: RequestContext<S>, auth: ApiKey, Extension(service): Extension<Self>
        | async move {
            match service.list_providers(
                ctx,
                auth,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, axum::Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        Router::new()
            .route("/providers", get(list_providers_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
