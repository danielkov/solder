//! Types for the stations service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetStationsUnion {
    pub data: Option<Vec<Station>>,
    pub links: Option<GetBookingsUnionUnion>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Station {
    pub address: String,
    pub country_code: String,
    pub id: uuid::Uuid,
    pub name: String,
    pub timezone: Option<String>,
}
