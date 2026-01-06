//! Tickets service module
use axum::{
    http::{StatusCode},
    response::{IntoResponse, Response},
    routing::{get, post},
    Extension, Json, Router,
};

use crate::shared::RequestContext;

// Per-operation result and error types
// BuyMuseumTickets types
pub type BuyMuseumTicketsResult = Result<crate::types::MuseumTicketsConfirmation, BuyMuseumTicketsError>;
#[derive(Debug)]
pub enum BuyMuseumTicketsError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for BuyMuseumTicketsError {
    fn into_response(self) -> Response {
        match self {
            BuyMuseumTicketsError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            BuyMuseumTicketsError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}

// GetTicketCode types
/// Binary response wrapper that sets the Content-Type header.
#[derive(Debug)]
pub struct GetTicketCodeResponse(pub crate::types::TicketCodeImage);

impl IntoResponse for GetTicketCodeResponse {
    fn into_response(self) -> Response {
        ([(axum::http::header::CONTENT_TYPE, "image/png")], self.0).into_response()
        }
}

pub type GetTicketCodeResult = Result<GetTicketCodeResponse, GetTicketCodeError>;
#[derive(Debug)]
pub enum GetTicketCodeError {
    /// Status: Code(400)
    BadRequest(crate::types::Error),
    /// Status: Code(404)
    NotFound(crate::types::Error),
    }

impl IntoResponse for GetTicketCodeError {
    fn into_response(self) -> Response {
        match self {
            GetTicketCodeError::BadRequest(err) => {
                let status = StatusCode::BAD_REQUEST;
                (status, Json(err)).into_response()
                }
            GetTicketCodeError::NotFound(err) => {
                let status = StatusCode::NOT_FOUND;
                (status, Json(err)).into_response()
                }
            }
    }
}



// Multipart request structs


/// Tickets service trait
///
/// # Example
///
/// ```rust
/// use redocly_museum_api::shared::RequestContext;
/// use redocly_museum_api::services::tickets::{
///     Tickets,
///     BuyMuseumTicketsResult,
///     GetTicketCodeResult,
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
/// struct TicketsService {
///     // Add any dependencies your service needs
/// }
///
/// impl TicketsService {
///     fn new() -> Self {
///         Self {}
///     }
/// }
///
/// // Implement the trait
/// impl Tickets<AppState> for TicketsService {
///     async fn buy_museum_tickets(
///         &self,
///         ctx: RequestContext<AppState>,
///         body: redocly_museum_api::types::BuyMuseumTickets,
///     ) -> BuyMuseumTicketsResult {
///         // Implement your business logic here
///         // Return Ok(your_museumticketsconfirmation) or Err(error)
///         todo!("implement buy_museum_tickets")
///     }
///
///     async fn get_ticket_code(
///         &self,
///         ctx: RequestContext<AppState>,
///         ticket_id: String,
///     ) -> GetTicketCodeResult {
///         // Implement your business logic here
///         // Return Ok(your_ticketcodeimage) or Err(error)
///         todo!("implement get_ticket_code")
///     }
///
/// }
///
/// // Usage: Create router and merge into your app
/// # async fn example() {
/// let state = AppState {};
/// let service = TicketsService::new();
///
/// let app = axum::Router::new()
///     .with_state(state)
///     .merge(service.router());
/// # }
/// ```
pub trait Tickets<S>: Send + Sync + Clone + Sized + 'static
where
    S: Clone + Send + Sync + 'static,
{
    /// Post /tickets
    fn buy_museum_tickets(
        &self,
        ctx: RequestContext<S>,
        body: crate::types::BuyMuseumTickets,
        ) -> impl std::future::Future<Output = BuyMuseumTicketsResult> + Send;

    /// Get /tickets/{ticketId}/qr
    fn get_ticket_code(
        &self,
        ctx: RequestContext<S>,
        ticket_id: String,
        ) -> impl std::future::Future<Output = GetTicketCodeResult> + Send;

    /// Create a router for this service
    fn router(self) -> Router<S> {
        let buy_museum_tickets_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, Json(body): Json<crate::types::BuyMuseumTickets>
        | async move {
            match service.buy_museum_tickets(
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

        let get_ticket_code_handler = |ctx: RequestContext<S>, Extension(service): Extension<Self>, axum::extract::Path(path_params): axum::extract::Path<String>
        | async move {
            let ticket_id = path_params;
            match service.get_ticket_code(
                ctx,
                ticket_id,
                ).await {
                Ok(result) => {
                    let status = StatusCode::OK;
                    // Binary response - use the wrapper's IntoResponse which sets Content-Type
                    (status, result).into_response()
                    }
                Err(e) => e.into_response(),
            }
        };

        Router::new()
            .route("/tickets", post(buy_museum_tickets_handler))
            .route("/tickets/{ticketId}/qr", get(get_ticket_code_handler))
            .layer(Extension(self))
    }
}

// Query parameter structs
