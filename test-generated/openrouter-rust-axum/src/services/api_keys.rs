//! ApiKeys service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{delete, get, patch, post},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

/// Bearer authentication token
#[derive(Clone, Debug)]
pub struct AuthBearer(pub String);

// Per-operation result and error types
// GetCurrentKey types
pub type GetCurrentKeyResult = Result<crate::types::GetCurrentKeyResponse, GetCurrentKeyError>;
#[derive(Debug)]
pub enum GetCurrentKeyError {
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for GetCurrentKeyError {
    fn into_response(self) -> Response {
        match self {
            GetCurrentKeyError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            GetCurrentKeyError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}

// List types
pub type ListResult = Result<crate::types::ListResponse, ListError>;
#[derive(Debug)]
pub enum ListError {
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(429)
    TooManyRequests(crate::types::TooManyRequestsResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for ListError {
    fn into_response(self) -> Response {
        match self {
            ListError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            ListError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
                }
            ListError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}

// CreateKeys types
pub type CreateKeysResult = Result<crate::types::CreateKeysResponse, CreateKeysError>;
#[derive(Debug)]
pub enum CreateKeysError {
    /// Status: Code(400)
    BadRequest(crate::types::BadRequestResponse),
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(429)
    TooManyRequests(crate::types::TooManyRequestsResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for CreateKeysError {
    fn into_response(self) -> Response {
        match self {
            CreateKeysError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            CreateKeysError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            CreateKeysError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
                }
            CreateKeysError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}

// GetKey types
pub type GetKeyResult = Result<crate::types::GetKeyResponse, GetKeyError>;
#[derive(Debug)]
pub enum GetKeyError {
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(404)
    NotFound(crate::types::NotFoundResponse),
    /// Status: Code(429)
    TooManyRequests(crate::types::TooManyRequestsResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for GetKeyError {
    fn into_response(self) -> Response {
        match self {
            GetKeyError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            GetKeyError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            GetKeyError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
                }
            GetKeyError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}

// DeleteKeys types
pub type DeleteKeysResult = Result<crate::types::DeleteKeysResponse, DeleteKeysError>;
#[derive(Debug)]
pub enum DeleteKeysError {
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(404)
    NotFound(crate::types::NotFoundResponse),
    /// Status: Code(429)
    TooManyRequests(crate::types::TooManyRequestsResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for DeleteKeysError {
    fn into_response(self) -> Response {
        match self {
            DeleteKeysError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            DeleteKeysError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            DeleteKeysError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
                }
            DeleteKeysError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}

// UpdateKeys types
pub type UpdateKeysResult = Result<crate::types::UpdateKeysResponse, UpdateKeysError>;
#[derive(Debug)]
pub enum UpdateKeysError {
    /// Status: Code(400)
    BadRequest(crate::types::BadRequestResponse),
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(404)
    NotFound(crate::types::NotFoundResponse),
    /// Status: Code(429)
    TooManyRequests(crate::types::TooManyRequestsResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for UpdateKeysError {
    fn into_response(self) -> Response {
        match self {
            UpdateKeysError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            UpdateKeysError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            UpdateKeysError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            UpdateKeysError::TooManyRequests(err) => {
                let status = StatusCode::TOO_MANY_REQUESTS;
                (status, Json(err)).into_response()
                }
            UpdateKeysError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// ApiKeys service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::api_keys::{
///     ApiKeys,
///     GetCurrentKeyResult,
///     ListResult,
///     ListQuery,
///     CreateKeysResult,
///     GetKeyResult,
///     DeleteKeysResult,
///     UpdateKeysResult,
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
/// struct ApiKeysService {
///     // Add any dependencies your service needs
/// }
///
/// impl ApiKeysService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl ApiKeys<AppState> for ApiKeysService {
///     async fn get_current_key(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> GetCurrentKeyResult {
///         // Implement your business logic here
///         // Return Ok(your_getcurrentkeyresponse) or Err(error)
///         todo!("implement get_current_key")
///     }
///
///     async fn list(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: ListQuery,
///     ) -> ListResult {
///         // Implement your business logic here
///         // Return Ok(your_listresponse) or Err(error)
///         todo!("implement list")
///     }
///
///     async fn create_keys(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: open_router_api::types::CreateKeysRequest,
///     ) -> CreateKeysResult {
///         // Implement your business logic here
///         // Return Ok(your_createkeysresponse) or Err(error)
///         todo!("implement create_keys")
///     }
///
///     async fn get_key(
///         &self,
///         ctx: RequestContext<AppState>,
///         hash: String,
///     ) -> GetKeyResult {
///         // Implement your business logic here
///         // Return Ok(your_getkeyresponse) or Err(error)
///         todo!("implement get_key")
///     }
///
///     async fn delete_keys(
///         &self,
///         ctx: RequestContext<AppState>,
///         hash: String,
///     ) -> DeleteKeysResult {
///         // Implement your business logic here
///         // Return Ok(your_deletekeysresponse) or Err(error)
///         todo!("implement delete_keys")
///     }
///
///     async fn update_keys(
///         &self,
///         ctx: RequestContext<AppState>,
///         hash: String,
///         body: open_router_api::types::UpdateKeysRequest,
///     ) -> UpdateKeysResult {
///         // Implement your business logic here
///         // Return Ok(your_updatekeysresponse) or Err(error)
///         todo!("implement update_keys")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = ApiKeysService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait ApiKeys<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /key
    fn get_current_key(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = GetCurrentKeyResult> + Send;

    /// Get /keys
    fn list(
        &self,
        ctx: RequestContext<S>,
        query: ListQuery,
        ) -> impl std::future::Future<Output = ListResult> + Send;

    /// Post /keys
    fn create_keys(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::CreateKeysRequest,
        ) -> impl std::future::Future<Output = CreateKeysResult> + Send;

    /// Get /keys/{hash}
    fn get_key(
        &self,
        ctx: RequestContext<S>,
        hash: String,
        ) -> impl std::future::Future<Output = GetKeyResult> + Send;

    /// Delete /keys/{hash}
    fn delete_keys(
        &self,
        ctx: RequestContext<S>,
        hash: String,
        ) -> impl std::future::Future<Output = DeleteKeysResult> + Send;

    /// Patch /keys/{hash}
    fn update_keys(
        &self,
        ctx: RequestContext<S>,
        hash: String,
        body: crate::types::UpdateKeysRequest,
        ) -> impl std::future::Future<Output = UpdateKeysResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_current_key_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.get_current_key(
                ctx,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let list_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Query(query): axum::extract::Query<ListQuery>
        | async move {
            match service.list(
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

        let create_keys_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::CreateKeysRequest>
        | async move {
            match service.create_keys(
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

        let get_key_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>
        | async move {
            let hash = path_params;
            match service.get_key(
                ctx,
                hash,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let delete_keys_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>
        | async move {
            let hash = path_params;
            match service.delete_keys(
                ctx,
                hash,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let update_keys_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>, Json(body): Json<crate::types::UpdateKeysRequest>
        | async move {
            let hash = path_params;
            match service.update_keys(
                ctx,
                hash,
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
            .route("/key", get(get_current_key_handler))
            .route("/keys", get(list_handler))
            .route("/keys", post(create_keys_handler))
            .route("/keys/{hash}", get(get_key_handler))
            .route("/keys/{hash}", delete(delete_keys_handler))
            .route("/keys/{hash}", patch(update_keys_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct ListQuery {
    pub include_disabled: Option<String>,
    pub offset: Option<String>,
    
}

