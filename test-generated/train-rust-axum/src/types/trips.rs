//! Types for the trips service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTripsUnion {
    pub data: Option<Vec<GetTripsUnionUnion>>,
    pub links: Option<GetBookingsUnionUnion>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTripsUnionUnion {
    pub arrival_time: Option<jiff::Timestamp>,
    pub bicycles_allowed: Option<bool>,
    pub departure_time: Option<jiff::Timestamp>,
    pub destination: Option<String>,
    pub dogs_allowed: Option<bool>,
    pub id: Option<uuid::Uuid>,
    pub operator: Option<String>,
    pub origin: Option<String>,
    pub price: Option<f32>,
    #[serde(rename = "self")]
    pub _self: Option<String>,
}

