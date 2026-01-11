import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxRateFlatAmount } from './TaxRateFlatAmount';
import { TaxRateFlatAmountSchema } from './TaxRateFlatAmount';
/**
 * TaxProductResourceTaxRateDetails
 *
 * 
 */
export interface TaxProductResourceTaxRateDetails {
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string;
  /**
   * The amount of the tax rate when the `rate_type` is `flat_amount`. Tax rates with `rate_type` `percentage` can vary based on the transaction, resulting in this field being `null`. This field exposes the amount and currency of the flat tax rate.
   */
  flatAmount?: TaxRateFlatAmount;
  /**
   * The tax rate percentage as a string. For example, 8.5% is represented as `"8.5"`.
   */
  percentageDecimal: string;
  /**
   * Indicates the type of tax rate applied to the taxable amount. This value can be `null` when no tax applies to the location. This field is only present for TaxRates created by Stripe Tax.
   */
  rateType?: string;
  /**
   * State, county, province, or region.
   */
  state?: string;
  /**
   * The tax type, such as `vat` or `sales_tax`.
   */
  taxType?: string;
}

export const TaxProductResourceTaxRateDetailsSchema: TypedSchema<TaxProductResourceTaxRateDetails> = typed<TaxProductResourceTaxRateDetails>(object({
  country: optional(string()),
  get flatAmount() { return optional(TaxRateFlatAmountSchema) },
  percentageDecimal: string(),
  rateType: optional(string()),
  state: optional(string()),
  taxType: optional(string()),
}));