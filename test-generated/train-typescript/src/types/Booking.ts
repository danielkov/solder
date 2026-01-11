import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * A booking for a train trip.
 */
export interface Booking {
  /**
   * Indicates whether the passenger has a bicycle.
   */
  hasBicycle?: boolean;
  /**
   * Indicates whether the passenger has a dog.
   */
  hasDog?: boolean;
  /**
   * Unique identifier for the booking
   */
  id?: string;
  /**
   * Name of the passenger
   */
  passengerName?: string;
  /**
   * Identifier of the booked trip
   */
  tripId?: string;
}

export const BookingSchema: TypedSchema<Booking> = typed<Booking>(object({
  hasBicycle: optional(boolean()),
  hasDog: optional(boolean()),
  id: optional(string()),
  passengerName: optional(string()),
  tripId: optional(string()),
}));