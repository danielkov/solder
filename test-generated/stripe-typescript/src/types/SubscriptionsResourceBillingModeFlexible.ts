import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SubscriptionsResourceBillingModeFlexible
 *
 * 
 */
export interface SubscriptionsResourceBillingModeFlexible {
  /**
   * Controls how invoices and invoice items display proration amounts and discount amounts.
   */
  prorationDiscounts?: string;
}

export const SubscriptionsResourceBillingModeFlexibleSchema: TypedSchema<SubscriptionsResourceBillingModeFlexible> = typed<SubscriptionsResourceBillingModeFlexible>(object({
  prorationDiscounts: optional(string()),
}));