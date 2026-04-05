//! Types for the bookings service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Booking {
    pub has_bicycle: Option<bool>,
    pub has_dog: Option<bool>,
    pub id: Option<uuid::Uuid>,
    pub passenger_name: Option<String>,
    pub trip_id: Option<uuid::Uuid>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateBookingUnion {
    pub has_bicycle: Option<bool>,
    pub has_dog: Option<bool>,
    pub id: Option<uuid::Uuid>,
    pub links: Option<LinksSelf>,
    pub passenger_name: Option<String>,
    pub trip_id: Option<uuid::Uuid>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBookingsUnion {
    pub data: Option<Vec<Booking>>,
    pub links: Option<GetBookingsUnionUnion>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LinksSelf {
    #[serde(rename = "self")]
    pub _self: Option<String>,
}

