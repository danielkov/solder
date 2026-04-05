//! Types for the events service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

pub type EventDates = Vec<Date>;

pub type EventDescription = String;

pub type EventLocation = String;

pub type EventName = String;

pub type EventPrice = f32;

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

pub type SpecialEventCollection = Vec<SpecialEvent>;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SpecialEventFields {
    pub dates: Option<EventDates>,
    #[serde(rename = "eventDescription")]
    pub event_description: Option<EventDescription>,
    pub location: Option<EventLocation>,
    pub name: Option<EventName>,
    pub price: Option<EventPrice>,
}

