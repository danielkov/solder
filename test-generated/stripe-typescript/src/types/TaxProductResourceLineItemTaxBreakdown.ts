import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductResourceJurisdiction } from './TaxProductResourceJurisdiction';
import { TaxProductResourceJurisdictionSchema } from './TaxProductResourceJurisdiction';
import type { TaxProductResourceLineItemTaxRateDetails } from './TaxProductResourceLineItemTaxRateDetails';
import { TaxProductResourceLineItemTaxRateDetailsSchema } from './TaxProductResourceLineItemTaxRateDetails';
/**
 * TaxProductResourceLineItemTaxBreakdown
 *
 * 
 */
export interface TaxProductResourceLineItemTaxBreakdown {
  /**
   * The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * TaxProductResourceJurisdiction
   *
   * 
   */
  jurisdiction: TaxProductResourceJurisdiction;
  /**
   * Indicates whether the jurisdiction was determined by the origin (merchant's address) or destination (customer's address).
   */
  sourcing: string;
  /**
   * Details regarding the rate for this tax. This field will be `null` when the tax is not imposed, for example if the product is exempt from tax.
   */
  taxRateDetails?: TaxProductResourceLineItemTaxRateDetails;
  /**
   * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
   */
  taxabilityReason: string;
  /**
   * The amount on which tax is calculated, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  taxableAmount: number;
}

export const TaxProductResourceLineItemTaxBreakdownSchema: TypedSchema<TaxProductResourceLineItemTaxBreakdown> = typed<TaxProductResourceLineItemTaxBreakdown>(object({
  amount: number(),
  jurisdiction: TaxProductResourceJurisdictionSchema,
  sourcing: string(),
  get taxRateDetails() { return optional(TaxProductResourceLineItemTaxRateDetailsSchema) },
  taxabilityReason: string(),
  taxableAmount: number(),
}));