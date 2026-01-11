import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingBillResourceInvoicingPricingPricingPriceDetails
 *
 * 
 */
export interface BillingBillResourceInvoicingPricingPricingPriceDetails {
  /**
   * The ID of the price this item is associated with.
   */
  price: string;
  /**
   * The ID of the product this item is associated with.
   */
  product: string;
}

export const BillingBillResourceInvoicingPricingPricingPriceDetailsSchema: TypedSchema<BillingBillResourceInvoicingPricingPricingPriceDetails> = typed<BillingBillResourceInvoicingPricingPricingPriceDetails>(object({
  price: string(),
  product: string(),
}));