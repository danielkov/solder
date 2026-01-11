import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestSubscriptionsObjectNextBilling } from './PostCheckoutSessionsRequestSubscriptionsObjectNextBilling';
import { PostCheckoutSessionsRequestSubscriptionsObjectNextBillingSchema } from './PostCheckoutSessionsRequestSubscriptionsObjectNextBilling';
/**
 * subscription_param
 */
export interface DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptionsObject {
  interval: string;
  intervalCount?: number;
  name?: string;
  /**
   * subscription_next_billing_param
   */
  nextBilling?: PostCheckoutSessionsRequestSubscriptionsObjectNextBilling;
  reference: string;
}

export const DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptionsObjectSchema: TypedSchema<DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptionsObject> = typed<DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptionsObject>(object({
  interval: string(),
  intervalCount: optional(number()),
  name: optional(string()),
  get nextBilling() { return optional(PostCheckoutSessionsRequestSubscriptionsObjectNextBillingSchema) },
  reference: string(),
}));