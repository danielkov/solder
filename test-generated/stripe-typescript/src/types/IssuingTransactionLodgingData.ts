import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * IssuingTransactionLodgingData
 *
 * 
 */
export interface IssuingTransactionLodgingData {
  /**
   * The time of checking into the lodging.
   */
  checkInAt?: number;
  /**
   * The number of nights stayed at the lodging.
   */
  nights?: number;
}

export const IssuingTransactionLodgingDataSchema: TypedSchema<IssuingTransactionLodgingData> = typed<IssuingTransactionLodgingData>(object({
  checkInAt: optional(number()),
  nights: optional(number()),
}));