//! Service interfaces organized by tag

#[cfg(feature = "faq")]
pub mod faq;
#[cfg(feature = "files")]
pub mod files;
#[cfg(feature = "orders")]
pub mod orders;
#[cfg(feature = "owners")]
pub mod owners;
#[cfg(feature = "pets")]
pub mod pets;
