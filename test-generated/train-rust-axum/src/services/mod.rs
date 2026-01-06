//! Service interfaces organized by tag

#[cfg(feature = "bookings")]
pub mod bookings;
#[cfg(feature = "payments")]
pub mod payments;
#[cfg(feature = "stations")]
pub mod stations;
#[cfg(feature = "trips")]
pub mod trips;
