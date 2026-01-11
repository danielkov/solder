import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * payment_details_order_customer_reference_param
 *
 * Provides industry-specific information about the charge.
 */
export interface PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetails {
  customerReference?: PostAccountsRequestPaymentsPricing;
  orderReference?: PostAccountsRequestPaymentsPricing;
}

export const PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetailsSchema: TypedSchema<PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetails> = typed<PostPaymentIntentsIntentIncrementAuthorizationRequestPaymentDetails>(object({
  get customerReference() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get orderReference() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));