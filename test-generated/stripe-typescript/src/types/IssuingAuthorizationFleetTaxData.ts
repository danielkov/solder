import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationFleetTaxData
 *
 * 
 */
export interface IssuingAuthorizationFleetTaxData {
  /**
   * Amount of state or provincial Sales Tax included in the transaction amount. `null` if not reported by merchant or not subject to tax.
   */
  localAmountDecimal?: string;
  /**
   * Amount of national Sales Tax or VAT included in the transaction amount. `null` if not reported by merchant or not subject to tax.
   */
  nationalAmountDecimal?: string;
}

export const IssuingAuthorizationFleetTaxDataSchema: TypedSchema<IssuingAuthorizationFleetTaxData> = typed<IssuingAuthorizationFleetTaxData>(object({
  localAmountDecimal: optional(string()),
  nationalAmountDecimal: optional(string()),
}));