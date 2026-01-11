import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationFleetFuelPriceData
 *
 * 
 */
export interface IssuingAuthorizationFleetFuelPriceData {
  /**
   * Gross fuel amount that should equal Fuel Quantity multiplied by Fuel Unit Cost, inclusive of taxes.
   */
  grossAmountDecimal?: string;
}

export const IssuingAuthorizationFleetFuelPriceDataSchema: TypedSchema<IssuingAuthorizationFleetFuelPriceData> = typed<IssuingAuthorizationFleetFuelPriceData>(object({
  grossAmountDecimal: optional(string()),
}));