import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductResourceTaxRateDetails } from './TaxProductResourceTaxRateDetails';
import { TaxProductResourceTaxRateDetailsSchema } from './TaxProductResourceTaxRateDetails';
/**
 * TaxProductResourceTaxBreakdown
 *
 * 
 */
export interface TaxProductResourceTaxBreakdown {
  /**
   * The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Specifies whether the tax amount is included in the line item amount.
   */
  inclusive: boolean;
  /**
   * TaxProductResourceTaxRateDetails
   *
   * 
   */
  taxRateDetails: TaxProductResourceTaxRateDetails;
  /**
   * The reasoning behind this tax, for example, if the product is tax exempt. We might extend the possible values for this field to support new tax rules.
   */
  taxabilityReason: string;
  /**
   * The amount on which tax is calculated, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  taxableAmount: number;
}

export const TaxProductResourceTaxBreakdownSchema: TypedSchema<TaxProductResourceTaxBreakdown> = typed<TaxProductResourceTaxBreakdown>(object({
  amount: number(),
  inclusive: boolean(),
  taxRateDetails: TaxProductResourceTaxRateDetailsSchema,
  taxabilityReason: string(),
  taxableAmount: number(),
}));