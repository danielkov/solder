//! API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[cfg(feature = "bookings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Booking {
    pub has_bicycle: Option<bool>,
    pub has_dog: Option<bool>,
    pub id: Option<uuid::Uuid>,
    pub passenger_name: Option<String>,
    pub trip_id: Option<uuid::Uuid>,
}

#[cfg(feature = "payments")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BookingPayment {
    pub amount: Option<f32>,
    pub currency: Option<String>,
    pub id: Option<uuid::Uuid>,
    pub source: Option<SourceUnion>,
    pub status: Option<String>,
}

#[cfg(feature = "payments")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateBookingPaymentUnion {
    pub amount: Option<f32>,
    pub currency: Option<String>,
    pub id: Option<uuid::Uuid>,
    pub links: Option<LinksBooking>,
    pub source: Option<SourceUnion>,
    pub status: Option<String>,
}

#[cfg(feature = "bookings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateBookingUnion {
    pub has_bicycle: Option<bool>,
    pub has_dog: Option<bool>,
    pub id: Option<uuid::Uuid>,
    pub links: Option<LinksSelf>,
    pub passenger_name: Option<String>,
    pub trip_id: Option<uuid::Uuid>,
}

#[cfg(feature = "bookings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBookingsUnion {
    pub data: Option<Vec<Booking>>,
    pub links: Option<GetBookingsUnionUnion>,
}

#[cfg(any(feature = "bookings", feature = "stations", feature = "trips"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBookingsUnionUnion {
    pub next: Option<String>,
    pub prev: Option<String>,
    #[serde(rename = "self")]
    pub _self: Option<String>,
}

#[cfg(feature = "stations")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetStationsUnion {
    pub data: Option<Vec<Station>>,
    pub links: Option<GetBookingsUnionUnion>,
}

#[cfg(feature = "trips")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetTripsUnion {
    pub data: Option<Vec<GetTripsUnionUnion>>,
    pub links: Option<GetBookingsUnionUnion>,
}

#[cfg(feature = "trips")]
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

#[cfg(feature = "payments")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LinksBooking {
    pub booking: Option<String>,
}

#[cfg(feature = "bookings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LinksSelf {
    #[serde(rename = "self")]
    pub _self: Option<String>,
}

#[cfg(any(
    feature = "bookings",
    feature = "payments",
    feature = "stations",
    feature = "trips"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Problem {
    pub detail: Option<String>,
    pub instance: Option<String>,
    pub status: Option<i32>,
    pub title: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[cfg(feature = "payments")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SourceUnion {
    Card(SourceUnionObject),
    BankAccount(SourceUnionObject2),
}

#[cfg(feature = "payments")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceUnionObject {
    pub address_city: Option<String>,
    pub address_country: String,
    pub address_line1: Option<String>,
    pub address_line2: Option<String>,
    pub address_post_code: Option<String>,
    pub cvc: String,
    pub exp_month: i64,
    pub exp_year: i64,
    pub name: String,
    pub number: String,
    pub object: Option<String>,
}

#[cfg(feature = "payments")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceUnionObject2 {
    pub account_type: String,
    pub bank_name: String,
    pub country: String,
    pub name: String,
    pub number: String,
    pub object: Option<String>,
    pub sort_code: Option<String>,
}

#[cfg(feature = "stations")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Station {
    pub address: String,
    pub country_code: String,
    pub id: uuid::Uuid,
    pub name: String,
    pub timezone: Option<String>,
}
