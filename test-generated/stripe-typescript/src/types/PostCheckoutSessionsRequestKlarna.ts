import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestSubscriptions } from './PostCheckoutSessionsRequestSubscriptions';
import { PostCheckoutSessionsRequestSubscriptionsSchema } from './PostCheckoutSessionsRequestSubscriptions';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestKlarna {
  captureMethod?: string;
  setupFutureUsage?: string;
  subscriptions?: PostCheckoutSessionsRequestSubscriptions;
}

export const PostCheckoutSessionsRequestKlarnaSchema: TypedSchema<PostCheckoutSessionsRequestKlarna> = typed<PostCheckoutSessionsRequestKlarna>(object({
  captureMethod: optional(string()),
  setupFutureUsage: optional(string()),
  get subscriptions() { return optional(PostCheckoutSessionsRequestSubscriptionsSchema) },
}));