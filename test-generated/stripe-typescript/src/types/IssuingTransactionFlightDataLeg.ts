import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingTransactionFlightDataLeg
 *
 * 
 */
export interface IssuingTransactionFlightDataLeg {
  /**
   * The three-letter IATA airport code of the flight's destination.
   */
  arrivalAirportCode?: string;
  /**
   * The airline carrier code.
   */
  carrier?: string;
  /**
   * The three-letter IATA airport code that the flight departed from.
   */
  departureAirportCode?: string;
  /**
   * The flight number.
   */
  flightNumber?: string;
  /**
   * The flight's service class.
   */
  serviceClass?: string;
  /**
   * Whether a stopover is allowed on this flight.
   */
  stopoverAllowed?: boolean;
}

export const IssuingTransactionFlightDataLegSchema: TypedSchema<IssuingTransactionFlightDataLeg> = typed<IssuingTransactionFlightDataLeg>(object({
  arrivalAirportCode: optional(string()),
  carrier: optional(string()),
  departureAirportCode: optional(string()),
  flightNumber: optional(string()),
  serviceClass: optional(string()),
  stopoverAllowed: optional(boolean()),
}));