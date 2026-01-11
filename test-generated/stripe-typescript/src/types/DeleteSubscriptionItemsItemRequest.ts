import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface DeleteSubscriptionItemsItemRequest {
  /**
   * Delete all usage for the given subscription item. Allowed only when the current plan's `usage_type` is `metered`.
   */
  clearUsage?: boolean;
  /**
   * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
   */
  prorationBehavior?: string;
  /**
   * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
   */
  prorationDate?: number;
}

export const DeleteSubscriptionItemsItemRequestSchema: TypedSchema<DeleteSubscriptionItemsItemRequest> = typed<DeleteSubscriptionItemsItemRequest>(object({
  clearUsage: optional(boolean()),
  prorationBehavior: optional(string()),
  prorationDate: optional(number()),
}));