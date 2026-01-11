import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestSubscriptionsObjectNextBilling } from './PostCheckoutSessionsRequestSubscriptionsObjectNextBilling';
import { PostCheckoutSessionsRequestSubscriptionsObjectNextBillingSchema } from './PostCheckoutSessionsRequestSubscriptionsObjectNextBilling';
/**
 * setup_intent_subscription_param
 */
export interface PostCheckoutSessionsRequestSubscriptionsObject {
  interval: string;
  intervalCount?: number;
  name?: string;
  /**
   * subscription_next_billing_param
   */
  nextBilling: PostCheckoutSessionsRequestSubscriptionsObjectNextBilling;
  reference: string;
}

export const PostCheckoutSessionsRequestSubscriptionsObjectSchema: TypedSchema<PostCheckoutSessionsRequestSubscriptionsObject> = typed<PostCheckoutSessionsRequestSubscriptionsObject>(object({
  interval: string(),
  intervalCount: optional(number()),
  name: optional(string()),
  nextBilling: PostCheckoutSessionsRequestSubscriptionsObjectNextBillingSchema,
  reference: string(),
}));