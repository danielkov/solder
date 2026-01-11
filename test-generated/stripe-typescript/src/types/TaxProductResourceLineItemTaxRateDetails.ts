import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductResourceLineItemTaxRateDetails
 *
 * 
 */
export interface TaxProductResourceLineItemTaxRateDetails {
  /**
   * A localized display name for tax type, intended to be human-readable. For example, "Local Sales and Use Tax", "Value-added tax (VAT)", or "Umsatzsteuer (USt.)".
   */
  displayName: string;
  /**
   * The tax rate percentage as a string. For example, 8.5% is represented as "8.5".
   */
  percentageDecimal: string;
  /**
   * The tax type, such as `vat` or `sales_tax`.
   */
  taxType: string;
}

export const TaxProductResourceLineItemTaxRateDetailsSchema: TypedSchema<TaxProductResourceLineItemTaxRateDetails> = typed<TaxProductResourceLineItemTaxRateDetails>(object({
  displayName: string(),
  percentageDecimal: string(),
  taxType: string(),
}));