import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface GetTripsUnionUnion {
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
  self?: string;
}

export const GetTripsUnionUnionSchema: TypedSchema<GetTripsUnionUnion> = typed<GetTripsUnionUnion>(object({
  arrivalTime: optional(string()),
  bicyclesAllowed: optional(boolean()),
  departureTime: optional(string()),
  destination: optional(string()),
  dogsAllowed: optional(boolean()),
  id: optional(string()),
  operator: optional(string()),
  origin: optional(string()),
  price: optional(number()),
  self: optional(string()),
}));