import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestFlexible } from './PostCheckoutSessionsRequestFlexible';
import { PostCheckoutSessionsRequestFlexibleSchema } from './PostCheckoutSessionsRequestFlexible';
/**
 * billing_mode_migrate
 *
 * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
 */
export interface PostSubscriptionsSubscriptionMigrateRequestBillingMode {
  /**
   * flexible_params
   */
  flexible?: PostCheckoutSessionsRequestFlexible;
  type: string;
}

export const PostSubscriptionsSubscriptionMigrateRequestBillingModeSchema: TypedSchema<PostSubscriptionsSubscriptionMigrateRequestBillingMode> = typed<PostSubscriptionsSubscriptionMigrateRequestBillingMode>(object({
  get flexible() { return optional(PostCheckoutSessionsRequestFlexibleSchema) },
  type: string(),
}));