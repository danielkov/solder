//! Types for the payments service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BookingPayment {
    pub amount: Option<f32>,
    pub currency: Option<String>,
    pub id: Option<uuid::Uuid>,
    pub source: Option<SourceUnion>,
    pub status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateBookingPaymentUnion {
    pub amount: Option<f32>,
    pub currency: Option<String>,
    pub id: Option<uuid::Uuid>,
    pub links: Option<LinksBooking>,
    pub source: Option<SourceUnion>,
    pub status: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LinksBooking {
    pub booking: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SourceUnion {
    Card(SourceUnionObject),
    BankAccount(SourceUnionObject2),
}

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
