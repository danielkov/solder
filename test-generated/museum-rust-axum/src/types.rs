//! API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[cfg(feature = "tickets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BuyMuseumTickets {
    pub email: Option<Email>,
    #[serde(rename = "eventId")]
    pub event_id: Option<EventId>,
    #[serde(rename = "ticketDate")]
    pub ticket_date: Date,
    #[serde(rename = "ticketId")]
    pub ticket_id: Option<TicketId>,
    #[serde(rename = "ticketType")]
    pub ticket_type: TicketType,
}

#[cfg(any(feature = "events", feature = "operations", feature = "tickets"))]
pub type Date = jiff::civil::Date;

#[cfg(feature = "tickets")]
pub type Email = String;

#[cfg(any(feature = "events", feature = "operations", feature = "tickets"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Error {
    pub title: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[cfg(feature = "events")]
pub type EventDates = Vec<Date>;

#[cfg(feature = "events")]
pub type EventDescription = String;

#[cfg(any(feature = "events", feature = "tickets"))]
pub type EventId = uuid::Uuid;

#[cfg(feature = "events")]
pub type EventLocation = String;

#[cfg(feature = "events")]
pub type EventName = String;

#[cfg(feature = "events")]
pub type EventPrice = f32;

#[cfg(feature = "operations")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MuseumDailyHours {
    pub date: Date,
    #[serde(rename = "timeClose")]
    pub time_close: String,
    #[serde(rename = "timeOpen")]
    pub time_open: String,
}

#[cfg(feature = "operations")]
pub type MuseumHours = Vec<MuseumDailyHours>;

#[cfg(feature = "tickets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MuseumTicketsConfirmation {
    #[serde(rename = "confirmationCode")]
    pub confirmation_code: TicketConfirmation,
    #[serde(rename = "eventId")]
    pub event_id: Option<EventId>,
    pub message: TicketMessage,
    #[serde(rename = "ticketDate")]
    pub ticket_date: Date,
    #[serde(rename = "ticketId")]
    pub ticket_id: Option<TicketId>,
    #[serde(rename = "ticketType")]
    pub ticket_type: TicketType,
}

#[cfg(feature = "events")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SpecialEvent {
    pub dates: EventDates,
    #[serde(rename = "eventDescription")]
    pub event_description: EventDescription,
    #[serde(rename = "eventId")]
    pub event_id: Option<EventId>,
    pub location: EventLocation,
    pub name: EventName,
    pub price: EventPrice,
}

#[cfg(feature = "events")]
pub type SpecialEventCollection = Vec<SpecialEvent>;

#[cfg(feature = "events")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SpecialEventFields {
    pub dates: Option<EventDates>,
    #[serde(rename = "eventDescription")]
    pub event_description: Option<EventDescription>,
    pub location: Option<EventLocation>,
    pub name: Option<EventName>,
    pub price: Option<EventPrice>,
}

#[cfg(feature = "tickets")]
pub type TicketCodeImage = bytes::Bytes;

#[cfg(feature = "tickets")]
pub type TicketConfirmation = String;

#[cfg(feature = "tickets")]
pub type TicketId = uuid::Uuid;

#[cfg(feature = "tickets")]
pub type TicketMessage = String;

#[cfg(feature = "tickets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum TicketType {
    #[serde(rename = "event")]
    Event,
    #[serde(rename = "general")]
    General,
}
