import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationFleetNonFuelPriceData
 *
 * 
 */
export interface IssuingAuthorizationFleetNonFuelPriceData {
  /**
   * Gross non-fuel amount that should equal the sum of the line items, inclusive of taxes.
   */
  grossAmountDecimal?: string;
}

export const IssuingAuthorizationFleetNonFuelPriceDataSchema: TypedSchema<IssuingAuthorizationFleetNonFuelPriceData> = typed<IssuingAuthorizationFleetNonFuelPriceData>(object({
  grossAmountDecimal: optional(string()),
}));