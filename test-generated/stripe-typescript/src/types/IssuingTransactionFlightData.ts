import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingTransactionFlightDataLeg } from './IssuingTransactionFlightDataLeg';
import { IssuingTransactionFlightDataLegSchema } from './IssuingTransactionFlightDataLeg';
/**
 * IssuingTransactionFlightData
 *
 * 
 */
export interface IssuingTransactionFlightData {
  /**
   * The time that the flight departed.
   */
  departureAt?: number;
  /**
   * The name of the passenger.
   */
  passengerName?: string;
  /**
   * Whether the ticket is refundable.
   */
  refundable?: boolean;
  /**
   * The legs of the trip.
   */
  segments?: Array<IssuingTransactionFlightDataLeg>;
  /**
   * The travel agency that issued the ticket.
   */
  travelAgency?: string;
}

export const IssuingTransactionFlightDataSchema: TypedSchema<IssuingTransactionFlightData> = typed<IssuingTransactionFlightData>(object({
  departureAt: optional(number()),
  passengerName: optional(string()),
  refundable: optional(boolean()),
  get segments() { return optional(array(IssuingTransactionFlightDataLegSchema)) },
  travelAgency: optional(string()),
}));