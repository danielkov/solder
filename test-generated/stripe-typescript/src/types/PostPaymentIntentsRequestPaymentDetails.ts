import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * payment_details
 *
 * Provides industry-specific information about the charge.
 */
export interface PostPaymentIntentsRequestPaymentDetails {
  customerReference?: PostAccountsRequestPaymentsPricing;
  orderReference?: PostAccountsRequestPaymentsPricing;
}

export const PostPaymentIntentsRequestPaymentDetailsSchema: TypedSchema<PostPaymentIntentsRequestPaymentDetails> = typed<PostPaymentIntentsRequestPaymentDetails>(object({
  get customerReference() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get orderReference() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));