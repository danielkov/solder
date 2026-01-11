import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostSubscriptionsSubscriptionMigrateRequestBillingMode } from './PostSubscriptionsSubscriptionMigrateRequestBillingMode';
import { PostSubscriptionsSubscriptionMigrateRequestBillingModeSchema } from './PostSubscriptionsSubscriptionMigrateRequestBillingMode';
export interface PostSubscriptionsSubscriptionMigrateRequest {
  /**
   * billing_mode_migrate
   *
   * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
   */
  billingMode: PostSubscriptionsSubscriptionMigrateRequestBillingMode;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostSubscriptionsSubscriptionMigrateRequestSchema: TypedSchema<PostSubscriptionsSubscriptionMigrateRequest> = typed<PostSubscriptionsSubscriptionMigrateRequest>(object({
  billingMode: PostSubscriptionsSubscriptionMigrateRequestBillingModeSchema,
  expand: optional(array(string())),
}));