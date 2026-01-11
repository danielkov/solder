import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoicingPricingPricingPriceDetails } from './BillingBillResourceInvoicingPricingPricingPriceDetails';
import { BillingBillResourceInvoicingPricingPricingPriceDetailsSchema } from './BillingBillResourceInvoicingPricingPricingPriceDetails';
/**
 * BillingBillResourceInvoicingPricingPricing
 *
 * 
 */
export interface BillingBillResourceInvoicingPricingPricing {
  /**
   * BillingBillResourceInvoicingPricingPricingPriceDetails
   *
   * 
   */
  priceDetails?: BillingBillResourceInvoicingPricingPricingPriceDetails;
  /**
   * The type of the pricing details.
   */
  type: string;
  /**
   * The unit amount (in the `currency` specified) of the item which contains a decimal value with at most 12 decimal places.
   */
  unitAmountDecimal?: string;
}

export const BillingBillResourceInvoicingPricingPricingSchema: TypedSchema<BillingBillResourceInvoicingPricingPricing> = typed<BillingBillResourceInvoicingPricingPricing>(object({
  get priceDetails() { return optional(BillingBillResourceInvoicingPricingPricingPriceDetailsSchema) },
  type: string(),
  unitAmountDecimal: optional(string()),
}));