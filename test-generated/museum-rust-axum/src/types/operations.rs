//! Types for the operations service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MuseumDailyHours {
    pub date: Date,
    #[serde(rename = "timeClose")]
    pub time_close: String,
    #[serde(rename = "timeOpen")]
    pub time_open: String,
}

pub type MuseumHours = Vec<MuseumDailyHours>;

