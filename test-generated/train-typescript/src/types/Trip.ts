import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * A train trip.
 */
export interface Trip {
  /**
   * The date and time when the trip arrives
   */
  arrivalTime?: string;
  /**
   * Indicates whether bicycles are allowed on the trip
   */
  bicyclesAllowed?: boolean;
  /**
   * The date and time when the trip departs
   */
  departureTime?: string;
  /**
   * The destination station of the trip
   */
  destination?: string;
  /**
   * Indicates whether dogs are allowed on the trip
   */
  dogsAllowed?: boolean;
  /**
   * Unique identifier for the trip
   */
  id?: string;
  /**
   * The name of the operator of the trip
   */
  operator?: string;
  /**
   * The starting station of the trip
   */
  origin?: string;
  /**
   * The cost of the trip
   */
  price?: number;
}

export const TripSchema: TypedSchema<Trip> = typed<Trip>(object({
  arrivalTime: optional(string()),
  bicyclesAllowed: optional(boolean()),
  departureTime: optional(string()),
  destination: optional(string()),
  dogsAllowed: optional(boolean()),
  id: optional(string()),
  operator: optional(string()),
  origin: optional(string()),
  price: optional(number()),
}));