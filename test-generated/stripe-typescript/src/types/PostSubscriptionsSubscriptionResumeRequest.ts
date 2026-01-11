import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostSubscriptionsSubscriptionResumeRequest {
  /**
   * The billing cycle anchor that applies when the subscription is resumed. Either `now` or `unchanged`. The default is `now`. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
   */
  billingCycleAnchor?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) resulting from the `billing_cycle_anchor` being `unchanged`. When the `billing_cycle_anchor` is set to `now` (default value), no prorations are generated. If no value is passed, the default is `create_prorations`.
   */
  prorationBehavior?: string;
  /**
   * If set, prorations will be calculated as though the subscription was resumed at the given time. This can be used to apply exactly the same prorations that were previewed with the [create preview](https://stripe.com/docs/api/invoices/create_preview) endpoint.
   */
  prorationDate?: number;
}

export const PostSubscriptionsSubscriptionResumeRequestSchema: TypedSchema<PostSubscriptionsSubscriptionResumeRequest> = typed<PostSubscriptionsSubscriptionResumeRequest>(object({
  billingCycleAnchor: optional(string()),
  expand: optional(array(string())),
  prorationBehavior: optional(string()),
  prorationDate: optional(number()),
}));