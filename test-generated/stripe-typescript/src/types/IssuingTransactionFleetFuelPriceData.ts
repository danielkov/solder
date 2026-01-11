import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingTransactionFleetFuelPriceData
 *
 * 
 */
export interface IssuingTransactionFleetFuelPriceData {
  /**
   * Gross fuel amount that should equal Fuel Volume multipled by Fuel Unit Cost, inclusive of taxes.
   */
  grossAmountDecimal?: string;
}

export const IssuingTransactionFleetFuelPriceDataSchema: TypedSchema<IssuingTransactionFleetFuelPriceData> = typed<IssuingTransactionFleetFuelPriceData>(object({
  grossAmountDecimal: optional(string()),
}));