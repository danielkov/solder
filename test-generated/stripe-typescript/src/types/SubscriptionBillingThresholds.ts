import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * SubscriptionBillingThresholds
 *
 * 
 */
export interface SubscriptionBillingThresholds {
  /**
   * Monetary threshold that triggers the subscription to create an invoice
   */
  amountGte?: number;
  /**
   * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
   */
  resetBillingCycleAnchor?: boolean;
}

export const SubscriptionBillingThresholdsSchema: TypedSchema<SubscriptionBillingThresholds> = typed<SubscriptionBillingThresholds>(object({
  amountGte: optional(number()),
  resetBillingCycleAnchor: optional(boolean()),
}));