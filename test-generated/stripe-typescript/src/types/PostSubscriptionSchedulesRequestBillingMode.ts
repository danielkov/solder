import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestFlexible } from './PostCheckoutSessionsRequestFlexible';
import { PostCheckoutSessionsRequestFlexibleSchema } from './PostCheckoutSessionsRequestFlexible';
/**
 * billing_mode
 *
 * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
 */
export interface PostSubscriptionSchedulesRequestBillingMode {
  /**
   * flexible_params
   */
  flexible?: PostCheckoutSessionsRequestFlexible;
  type: string;
}

export const PostSubscriptionSchedulesRequestBillingModeSchema: TypedSchema<PostSubscriptionSchedulesRequestBillingMode> = typed<PostSubscriptionSchedulesRequestBillingMode>(object({
  get flexible() { return optional(PostCheckoutSessionsRequestFlexibleSchema) },
  type: string(),
}));