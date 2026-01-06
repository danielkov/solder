//! Models service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{get},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

/// Bearer authentication token
#[derive(Clone, Debug)]
pub struct AuthBearer(pub String);

// Per-operation result and error types
// GetModels types
pub type GetModelsResult = Result<crate::types::ModelsListResponse, GetModelsError>;
#[derive(Debug)]
pub enum GetModelsError {
    /// Status: Code(400)
    BadRequest(crate::types::BadRequestResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for GetModelsError {
    fn into_response(self) -> Response {
        match self {
            GetModelsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            GetModelsError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}

// ListModelsCount types
pub type ListModelsCountResult = Result<crate::types::ModelsCountResponse, ListModelsCountError>;
#[derive(Debug)]
pub enum ListModelsCountError {
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for ListModelsCountError {
    fn into_response(self) -> Response {
        match self {
            ListModelsCountError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}

// ListModelsUser types
pub type ListModelsUserResult = Result<crate::types::ModelsListResponse, ListModelsUserError>;
#[derive(Debug)]
pub enum ListModelsUserError {
    /// Status: Code(401)
    Unauthorized(crate::types::UnauthorizedResponse),
    /// Status: Code(500)
    InternalServerError(crate::types::InternalServerResponse),
    }

impl IntoResponse for ListModelsUserError {
    fn into_response(self) -> Response {
        match self {
            ListModelsUserError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            ListModelsUserError::InternalServerError(err) => {
                let status = StatusCode::INTERNAL_SERVER_ERROR;
                (status, Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// Models service trait
///
/// # Example
///
/// ```rust
/// use open_router_api::shared::RequestContext;
/// use open_router_api::services::models::{
///     Models,
///     GetModelsResult,
///     GetModelsQuery,
///     ListModelsCountResult,
///     ListModelsUserResult,
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
/// struct ModelsService {
///     // Add any dependencies your service needs
/// }
///
/// impl ModelsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Models<AppState> for ModelsService {
///     async fn get_models(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: GetModelsQuery,
///     ) -> GetModelsResult {
///         // Implement your business logic here
///         // Return Ok(your_modelslistresponse) or Err(error)
///         todo!("implement get_models")
///     }
///
///     async fn list_models_count(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> ListModelsCountResult {
///         // Implement your business logic here
///         // Return Ok(your_modelscountresponse) or Err(error)
///         todo!("implement list_models_count")
///     }
///
///     async fn list_models_user(
///         &self,
///         ctx: RequestContext<AppState>,
///     ) -> ListModelsUserResult {
///         // Implement your business logic here
///         // Return Ok(your_modelslistresponse) or Err(error)
///         todo!("implement list_models_user")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = ModelsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Models<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /models
    fn get_models(
        &self,
        ctx: RequestContext<S>,
        query: GetModelsQuery,
        ) -> impl std::future::Future<Output = GetModelsResult> + Send;

    /// Get /models/count
    fn list_models_count(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = ListModelsCountResult> + Send;

    /// Get /models/user
    fn list_models_user(
        &self,
        ctx: RequestContext<S>,
        ) -> impl std::future::Future<Output = ListModelsUserResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let get_models_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Query(query): axum::extract::Query<GetModelsQuery>
        | async move {
            match service.get_models(
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

        let list_models_count_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.list_models_count(
                ctx,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let list_models_user_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>
        | async move {
            match service.list_models_user(
                ctx,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        Router::new()
            .route("/models", get(get_models_handler))
            .route("/models/count", get(list_models_count_handler))
            .route("/models/user", get(list_models_user_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct GetModelsQuery {
    pub category: Option<String>,
    pub supported_parameters: Option<String>,
    
}

