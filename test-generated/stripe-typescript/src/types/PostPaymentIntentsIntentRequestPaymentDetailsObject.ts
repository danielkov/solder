import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * payment_details
 */
export interface PostPaymentIntentsIntentRequestPaymentDetailsObject {
  customerReference?: PostAccountsRequestPaymentsPricing;
  orderReference?: PostAccountsRequestPaymentsPricing;
}

export const PostPaymentIntentsIntentRequestPaymentDetailsObjectSchema: TypedSchema<PostPaymentIntentsIntentRequestPaymentDetailsObject> = typed<PostPaymentIntentsIntentRequestPaymentDetailsObject>(object({
  get customerReference() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get orderReference() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));