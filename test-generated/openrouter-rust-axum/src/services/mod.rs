//! Service interfaces organized by tag

#[cfg(feature = "analytics")]
pub mod analytics;
#[cfg(feature = "api_keys")]
pub mod api_keys;
#[cfg(feature = "beta_responses")]
pub mod beta_responses;
#[cfg(feature = "chat")]
pub mod chat;
#[cfg(feature = "completions")]
pub mod completions;
#[cfg(feature = "credits")]
pub mod credits;
#[cfg(feature = "embeddings")]
pub mod embeddings;
#[cfg(feature = "endpoints")]
pub mod endpoints;
#[cfg(feature = "generations")]
pub mod generations;
#[cfg(feature = "models")]
pub mod models;
#[cfg(feature = "o_auth")]
pub mod o_auth;
#[cfg(feature = "parameters")]
pub mod parameters;
#[cfg(feature = "providers")]
pub mod providers;
