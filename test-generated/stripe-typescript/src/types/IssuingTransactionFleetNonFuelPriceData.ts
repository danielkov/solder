import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingTransactionFleetNonFuelPriceData
 *
 * 
 */
export interface IssuingTransactionFleetNonFuelPriceData {
  /**
   * Gross non-fuel amount that should equal the sum of the line items, inclusive of taxes.
   */
  grossAmountDecimal?: string;
}

export const IssuingTransactionFleetNonFuelPriceDataSchema: TypedSchema<IssuingTransactionFleetNonFuelPriceData> = typed<IssuingTransactionFleetNonFuelPriceData>(object({
  grossAmountDecimal: optional(string()),
}));