//! Users service module
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
// ListUsers types
pub type ListUsersResult = Result<crate::types::UserList, ListUsersError>;
#[derive(Debug)]
pub enum ListUsersError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
}

impl IntoResponse for ListUsersError {
    fn into_response(self) -> Response {
        match self {
            ListUsersError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            ListUsersError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
        }
    }
}

// CreateUser types
pub type CreateUserResult = Result<crate::types::User, CreateUserError>;
#[derive(Debug)]
pub enum CreateUserError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(409)
    Conflict(crate::types::Error),
}

impl IntoResponse for CreateUserError {
    fn into_response(self) -> Response {
        match self {
            CreateUserError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            CreateUserError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            CreateUserError::Conflict(err) => {
                let status = StatusCode::CONFLICT;
                (status, Json(err)).into_response()
            }
        }
    }
}

// GetUserById types
pub type GetUserByIdResult = Result<crate::types::User, GetUserByIdError>;
#[derive(Debug)]
pub enum GetUserByIdError {
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
}

impl IntoResponse for GetUserByIdError {
    fn into_response(self) -> Response {
        match self {
            GetUserByIdError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            GetUserByIdError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
        }
    }
}

// UpdateUser types
pub type UpdateUserResult = Result<crate::types::User, UpdateUserError>;
#[derive(Debug)]
pub enum UpdateUserError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
}

impl IntoResponse for UpdateUserError {
    fn into_response(self) -> Response {
        match self {
            UpdateUserError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
            }
            UpdateUserError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            UpdateUserError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
        }
    }
}

// DeleteUser types
pub type DeleteUserResult = Result<(), DeleteUserError>;
#[derive(Debug)]
pub enum DeleteUserError {
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
}

impl IntoResponse for DeleteUserError {
    fn into_response(self) -> Response {
        match self {
            DeleteUserError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
            }
            DeleteUserError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
            }
        }
    }
}

// Multipart request structs

/// Users service trait
///
/// # Example
///
/// ```rust
/// use multi_file_reference_api::shared::RequestContext;
/// use multi_file_reference_api::services::users::{
///     Users,
///     ListUsersResult,
///     ListUsersQuery,
///     CreateUserResult,
///     GetUserByIdResult,
///     UpdateUserResult,
///     DeleteUserResult,
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
/// struct UsersService {
///     // Add any dependencies your service needs
/// }
///
/// impl UsersService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Users<AppState> for UsersService {
///     async fn list_users(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: ListUsersQuery,
///     ) -> ListUsersResult {
///         // Implement your business logic here
///         // Return Ok(your_userlist) or Err(error)
///         todo!("implement list_users")
///     }
///
///     async fn create_user(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: multi_file_reference_api::types::UserCreate,
///     ) -> CreateUserResult {
///         // Implement your business logic here
///         // Return Ok(your_user) or Err(error)
///         todo!("implement create_user")
///     }
///
///     async fn get_user_by_id(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> GetUserByIdResult {
///         // Implement your business logic here
///         // Return Ok(your_user) or Err(error)
///         todo!("implement get_user_by_id")
///     }
///
///     async fn update_user(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: multi_file_reference_api::types::UserUpdate,
///     ) -> UpdateUserResult {
///         // Implement your business logic here
///         // Return Ok(your_user) or Err(error)
///         todo!("implement update_user")
///     }
///
///     async fn delete_user(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> DeleteUserResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = UsersService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Users<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /users
    fn list_users(
        &self,
        ctx: RequestContext<S>,
        query: ListUsersQuery,
    ) -> impl std::future::Future<Output = ListUsersResult> + Send;

    /// Post /users
    fn create_user(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::UserCreate,
    ) -> impl std::future::Future<Output = CreateUserResult> + Send;

    /// Get /users/{userId}
    fn get_user_by_id(
        &self,
        ctx: RequestContext<S>,
    ) -> impl std::future::Future<Output = GetUserByIdResult> + Send;

    /// Put /users/{userId}
    fn update_user(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::UserUpdate,
    ) -> impl std::future::Future<Output = UpdateUserResult> + Send;

    /// Delete /users/{userId}
    fn delete_user(
        &self,
        ctx: RequestContext<S>,
    ) -> impl std::future::Future<Output = DeleteUserResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let list_users_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             axum::extract::Query(query): axum::extract::Query<ListUsersQuery>| async move {
                match service.list_users(ctx, query).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let create_user_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             Json(body): Json<crate::types::UserCreate>| async move {
                match service.create_user(ctx, body).await {
                    Ok(result) => {
                        let status = StatusCode::CREATED;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let get_user_by_id_handler =
            |ctx: RequestContext<S>, Extension(service): Extension<Self>| async move {
                match service.get_user_by_id(ctx).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let update_user_handler =
            |ctx: RequestContext<S>,
             Extension(service): Extension<Self>,
             Json(body): Json<crate::types::UserUpdate>| async move {
                match service.update_user(ctx, body).await {
                    Ok(result) => {
                        let status = StatusCode::OK;
                        (status, Json(result)).into_response()
                    }
                    Err(e) => e.into_response(),
                }
            };

        let delete_user_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>| async move {
            match service.delete_user(ctx).await {
                Ok(_) => {
                    let status = StatusCode::NO_CONTENT;
                    status.into_response()
                }
                Err(e) => e.into_response(),
            }
        };

        Router::new()
            .route("/users", get(list_users_handler))
            .route("/users", post(create_user_handler))
            .route("/users/{userId}", get(get_user_by_id_handler))
            .route("/users/{userId}", put(update_user_handler))
            .route("/users/{userId}", delete(delete_user_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct ListUsersQuery {
    pub page: Option<String>,
    pub page_size: Option<String>,
    pub status: Option<String>,
    pub role: Option<String>,
    pub search: Option<String>,
}
