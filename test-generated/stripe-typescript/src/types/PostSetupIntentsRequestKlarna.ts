import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand } from './DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand';
import { DefaultPostPaymentIntentsRequestKlarnaObjectOnDemandSchema } from './DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand';
import type { PostCheckoutSessionsRequestSubscriptions } from './PostCheckoutSessionsRequestSubscriptions';
import { PostCheckoutSessionsRequestSubscriptionsSchema } from './PostCheckoutSessionsRequestSubscriptions';
/**
 * setup_intent_payment_method_options_param
 */
export interface PostSetupIntentsRequestKlarna {
  currency?: string;
  /**
   * on_demand_param
   */
  onDemand?: DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand;
  preferredLocale?: string;
  subscriptions?: PostCheckoutSessionsRequestSubscriptions;
}

export const PostSetupIntentsRequestKlarnaSchema: TypedSchema<PostSetupIntentsRequestKlarna> = typed<PostSetupIntentsRequestKlarna>(object({
  currency: optional(string()),
  get onDemand() { return optional(DefaultPostPaymentIntentsRequestKlarnaObjectOnDemandSchema) },
  preferredLocale: optional(string()),
  get subscriptions() { return optional(PostCheckoutSessionsRequestSubscriptionsSchema) },
}));