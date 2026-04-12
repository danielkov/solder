//! Types for the providers service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListProvidersResponse {
    pub data: Vec<ListProvidersResponseDataItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListProvidersResponseDataItem {
    pub name: String,
    pub privacy_policy_url: String,
    pub slug: String,
    pub status_page_url: Option<String>,
    pub terms_of_service_url: Option<String>,
}
