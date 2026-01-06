//! Owners service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{get, post},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

// Per-operation result and error types
// ListOwners types
pub type ListOwnersResult = Result<crate::types::Owner, ListOwnersError>;
#[derive(Debug)]
pub enum ListOwnersError {
    InternalError(String),
    }

impl IntoResponse for ListOwnersError {
    fn into_response(self) -> Response {
        match self {
            ListOwnersError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
            }
    }
}

// CreateOwner types
pub type CreateOwnerResult = Result<crate::types::Owner, CreateOwnerError>;
#[derive(Debug)]
pub enum CreateOwnerError {
    InternalError(String),
    }

impl IntoResponse for CreateOwnerError {
    fn into_response(self) -> Response {
        match self {
            CreateOwnerError::InternalError(msg) => {
                (StatusCode::INTERNAL_SERVER_ERROR, msg).into_response()
            }
            }
    }
}



// Multipart request structs


/// Owners service trait
///
/// # Example
///
/// ```rust
/// use pet_store_api::shared::RequestContext;
/// use pet_store_api::services::owners::{
///     Owners,
///     ListOwnersResult,
///     CreateOwnerResult,
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
/// struct OwnersService {
///     // Add any dependencies your service needs
/// }
///
/// impl OwnersService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Owners<AppState> for OwnersService {
///     async fn list_owners(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> ListOwnersResult {
///         // Implement your business logic here
///         // Return Ok(your_owner) or Err(error)
///         todo!("implement list_owners")
///     }
///
///     async fn create_owner(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: pet_store_api::types::NewOwner,
///     ) -> CreateOwnerResult {
///         // Implement your business logic here
///         // Return Ok(your_owner) or Err(error)
///         todo!("implement create_owner")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = OwnersService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Owners<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /owners
    fn list_owners(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = ListOwnersResult> + Send;

    /// Post /owners
    fn create_owner(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::NewOwner,
        ) -> impl std::future::Future<Output = CreateOwnerResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let list_owners_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.list_owners(
                ctx,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let create_owner_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::NewOwner>
        | async move {
            match service.create_owner(
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
            .route("/owners", get(list_owners_handler))
            .route("/owners", post(create_owner_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
