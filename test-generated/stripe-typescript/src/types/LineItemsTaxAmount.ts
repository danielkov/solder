import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxRate } from './TaxRate';
import { TaxRateSchema } from './TaxRate';
/**
 * LineItemsTaxAmount
 *
 * 
 */
export interface LineItemsTaxAmount {
  /**
   * Amount of tax applied for this rate.
   */
  amount: number;
  /**
   * TaxRate
   *
   * Tax rates can be applied to [invoices](/invoicing/taxes/tax-rates), [subscriptions](/billing/taxes/tax-rates) and [Checkout Sessions](/payments/checkout/use-manual-tax-rates) to collect tax.

Related guide: [Tax rates](/billing/taxes/tax-rates)
   */
  rate: TaxRate;
  /**
   * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
   */
  taxabilityReason?: string;
  /**
   * The amount on which tax is calculated, in cents (or local equivalent).
   */
  taxableAmount?: number;
}

export const LineItemsTaxAmountSchema: TypedSchema<LineItemsTaxAmount> = typed<LineItemsTaxAmount>(object({
  amount: number(),
  rate: TaxRateSchema,
  taxabilityReason: optional(string()),
  taxableAmount: optional(number()),
}));