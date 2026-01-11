import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand } from './DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand';
import { DefaultPostPaymentIntentsRequestKlarnaObjectOnDemandSchema } from './DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand';
import type { DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptions } from './DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptions';
import { DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptionsSchema } from './DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptions';
/**
 * payment_method_options_param
 */
export interface DefaultPostPaymentIntentsRequestKlarnaObject {
  captureMethod?: string;
  /**
   * on_demand_param
   */
  onDemand?: DefaultPostPaymentIntentsRequestKlarnaObjectOnDemand;
  preferredLocale?: string;
  setupFutureUsage?: string;
  subscriptions?: DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptions;
}

export const DefaultPostPaymentIntentsRequestKlarnaObjectSchema: TypedSchema<DefaultPostPaymentIntentsRequestKlarnaObject> = typed<DefaultPostPaymentIntentsRequestKlarnaObject>(object({
  captureMethod: optional(string()),
  get onDemand() { return optional(DefaultPostPaymentIntentsRequestKlarnaObjectOnDemandSchema) },
  preferredLocale: optional(string()),
  setupFutureUsage: optional(string()),
  get subscriptions() { return optional(DefaultPostPaymentIntentsRequestKlarnaObjectSubscriptionsSchema) },
}));