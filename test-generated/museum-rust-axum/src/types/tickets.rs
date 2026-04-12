//! Types for the tickets service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

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

pub type Email = String;

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

pub type TicketCodeImage = bytes::Bytes;

pub type TicketConfirmation = String;

pub type TicketId = uuid::Uuid;

pub type TicketMessage = String;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum TicketType {
    #[serde(rename = "event")]
    Event,
    #[serde(rename = "general")]
    General,
}
