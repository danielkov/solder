import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * SubscriptionItemBillingThresholds
 *
 * 
 */
export interface SubscriptionItemBillingThresholds {
  /**
   * Usage threshold that triggers the subscription to create an invoice
   */
  usageGte?: number;
}

export const SubscriptionItemBillingThresholdsSchema: TypedSchema<SubscriptionItemBillingThresholds> = typed<SubscriptionItemBillingThresholds>(object({
  usageGte: optional(number()),
}));