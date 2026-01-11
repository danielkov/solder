import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * payment_intent_payment_method_options_param
 */
export interface PostPaymentIntentsRequestSwishObject {
  reference?: PostAccountsRequestPaymentsPricing;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestSwishObjectSchema: TypedSchema<PostPaymentIntentsRequestSwishObject> = typed<PostPaymentIntentsRequestSwishObject>(object({
  get reference() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  setupFutureUsage: optional(string()),
}));