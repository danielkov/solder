import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingTransactionFleetTaxData
 *
 * 
 */
export interface IssuingTransactionFleetTaxData {
  /**
   * Amount of state or provincial Sales Tax included in the transaction amount. Null if not reported by merchant or not subject to tax.
   */
  localAmountDecimal?: string;
  /**
   * Amount of national Sales Tax or VAT included in the transaction amount. Null if not reported by merchant or not subject to tax.
   */
  nationalAmountDecimal?: string;
}

export const IssuingTransactionFleetTaxDataSchema: TypedSchema<IssuingTransactionFleetTaxData> = typed<IssuingTransactionFleetTaxData>(object({
  localAmountDecimal: optional(string()),
  nationalAmountDecimal: optional(string()),
}));