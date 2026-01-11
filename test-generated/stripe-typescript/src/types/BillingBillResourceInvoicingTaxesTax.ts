import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoicingTaxesTaxRateDetails } from './BillingBillResourceInvoicingTaxesTaxRateDetails';
import { BillingBillResourceInvoicingTaxesTaxRateDetailsSchema } from './BillingBillResourceInvoicingTaxesTaxRateDetails';
/**
 * BillingBillResourceInvoicingTaxesTax
 *
 * 
 */
export interface BillingBillResourceInvoicingTaxesTax {
  /**
   * The amount of the tax, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Whether this tax is inclusive or exclusive.
   */
  taxBehavior: string;
  /**
   * Additional details about the tax rate. Only present when `type` is `tax_rate_details`.
   */
  taxRateDetails?: BillingBillResourceInvoicingTaxesTaxRateDetails;
  /**
   * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
   */
  taxabilityReason: string;
  /**
   * The amount on which tax is calculated, in cents (or local equivalent).
   */
  taxableAmount?: number;
  /**
   * The type of tax information.
   */
  type: string;
}

export const BillingBillResourceInvoicingTaxesTaxSchema: TypedSchema<BillingBillResourceInvoicingTaxesTax> = typed<BillingBillResourceInvoicingTaxesTax>(object({
  amount: number(),
  taxBehavior: string(),
  get taxRateDetails() { return optional(BillingBillResourceInvoicingTaxesTaxRateDetailsSchema) },
  taxabilityReason: string(),
  taxableAmount: optional(number()),
  type: string(),
}));