//! Events service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{delete, get, patch, post},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

// Per-operation result and error types
// ListSpecialEvents types
pub type ListSpecialEventsResult = Result<crate::types::SpecialEventCollection, ListSpecialEventsError>;
#[derive(Debug)]
pub enum ListSpecialEventsError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for ListSpecialEventsError {
    fn into_response(self) -> Response {
        match self {
            ListSpecialEventsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            ListSpecialEventsError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}

// CreateSpecialEvent types
pub type CreateSpecialEventResult = Result<crate::types::SpecialEvent, CreateSpecialEventError>;
#[derive(Debug)]
pub enum CreateSpecialEventError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for CreateSpecialEventError {
    fn into_response(self) -> Response {
        match self {
            CreateSpecialEventError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            CreateSpecialEventError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}

// GetSpecialEvent types
pub type GetSpecialEventResult = Result<crate::types::SpecialEvent, GetSpecialEventError>;
#[derive(Debug)]
pub enum GetSpecialEventError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for GetSpecialEventError {
    fn into_response(self) -> Response {
        match self {
            GetSpecialEventError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            GetSpecialEventError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}

// DeleteSpecialEvent types
pub type DeleteSpecialEventResult = Result<(), DeleteSpecialEventError>;
#[derive(Debug)]
pub enum DeleteSpecialEventError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(401)
    Unauthorized(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for DeleteSpecialEventError {
    fn into_response(self) -> Response {
        match self {
            DeleteSpecialEventError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            DeleteSpecialEventError::Unauthorized(err) => {
                let status = StatusCode::UNAUTHORIZED;
                (status, Json(err)).into_response()
                }
            DeleteSpecialEventError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}

// UpdateSpecialEvent types
pub type UpdateSpecialEventResult = Result<crate::types::SpecialEvent, UpdateSpecialEventError>;
#[derive(Debug)]
pub enum UpdateSpecialEventError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for UpdateSpecialEventError {
    fn into_response(self) -> Response {
        match self {
            UpdateSpecialEventError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            UpdateSpecialEventError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// Events service trait
///
/// # Example
///
/// ```rust
/// use redocly_museum_api::shared::RequestContext;
/// use redocly_museum_api::services::events::{
///     Events,
///     ListSpecialEventsResult,
///     ListSpecialEventsQuery,
///     CreateSpecialEventResult,
///     GetSpecialEventResult,
///     DeleteSpecialEventResult,
///     UpdateSpecialEventResult,
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
/// struct EventsService {
///     // Add any dependencies your service needs
/// }
///
/// impl EventsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Events<AppState> for EventsService {
///     async fn list_special_events(
///         &self,
///         ctx: RequestContext<AppState>,
///         query: ListSpecialEventsQuery,
///     ) -> ListSpecialEventsResult {
///         // Implement your business logic here
///         // Return Ok(your_specialeventcollection) or Err(error)
///         todo!("implement list_special_events")
///     }
///
///     async fn create_special_event(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: redocly_museum_api::types::SpecialEvent,
///     ) -> CreateSpecialEventResult {
///         // Implement your business logic here
///         // Return Ok(your_specialevent) or Err(error)
///         todo!("implement create_special_event")
///     }
///
///     async fn get_special_event(
///         &self,
///         ctx: RequestContext<AppState>,
///         event_id: String,
///     ) -> GetSpecialEventResult {
///         // Implement your business logic here
///         // Return Ok(your_specialevent) or Err(error)
///         todo!("implement get_special_event")
///     }
///
///     async fn delete_special_event(
///         &self,
///         ctx: RequestContext<AppState>,
///         event_id: String,
///     ) -> DeleteSpecialEventResult {
///         // Implement your business logic here
///         Ok(())
///     }
///
///     async fn update_special_event(
///         &self,
///         ctx: RequestContext<AppState>,
///         event_id: String,
///         body: redocly_museum_api::types::SpecialEventFields,
///     ) -> UpdateSpecialEventResult {
///         // Implement your business logic here
///         // Return Ok(your_specialevent) or Err(error)
///         todo!("implement update_special_event")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = EventsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Events<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Get /special-events
    fn list_special_events(
        &self,
        ctx: RequestContext<S>,
        query: ListSpecialEventsQuery,
        ) -> impl std::future::Future<Output = ListSpecialEventsResult> + Send;

    /// Post /special-events
    fn create_special_event(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::SpecialEvent,
        ) -> impl std::future::Future<Output = CreateSpecialEventResult> + Send;

    /// Get /special-events/{eventId}
    fn get_special_event(
        &self,
        ctx: RequestContext<S>,
        event_id: String,
        ) -> impl std::future::Future<Output = GetSpecialEventResult> + Send;

    /// Delete /special-events/{eventId}
    fn delete_special_event(
        &self,
        ctx: RequestContext<S>,
        event_id: String,
        ) -> impl std::future::Future<Output = DeleteSpecialEventResult> + Send;

    /// Patch /special-events/{eventId}
    fn update_special_event(
        &self,
        ctx: RequestContext<S>,
        event_id: String,
        body: crate::types::SpecialEventFields,
        ) -> impl std::future::Future<Output = UpdateSpecialEventResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let list_special_events_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Query(query): axum::extract::Query<ListSpecialEventsQuery>
        | async move {
            match service.list_special_events(
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

        let create_special_event_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::SpecialEvent>
        | async move {
            match service.create_special_event(
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

        let get_special_event_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>
        | async move {
            let event_id = path_params;
            match service.get_special_event(
                ctx,
                event_id,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    (status, Json(result)).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let delete_special_event_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>
        | async move {
            let event_id = path_params;
            match service.delete_special_event(
                ctx,
                event_id,
                ).await {
                Ok(_) => {
                    let status = StatusCode::NO_CONTENT;
                    status.into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        let update_special_event_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>, Json(body): Json<crate::types::SpecialEventFields>
        | async move {
            let event_id = path_params;
            match service.update_special_event(
                ctx,
                event_id,
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
            .route("/special-events", get(list_special_events_handler))
            .route("/special-events", post(create_special_event_handler))
            .route("/special-events/{eventId}", get(get_special_event_handler))
            .route("/special-events/{eventId}", delete(delete_special_event_handler))
            .route("/special-events/{eventId}", patch(update_special_event_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
#[derive(Debug, serde::Deserialize)]
pub struct ListSpecialEventsQuery {
    pub start_date: Option<String>,
    pub end_date: Option<String>,
    pub page: Option<String>,
    pub limit: Option<String>,
    
}

