import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * payment_details_capture_params
 */
export interface PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject {
  customerReference?: PostAccountsRequestPaymentsPricing;
  orderReference?: PostAccountsRequestPaymentsPricing;
}

export const PostPaymentIntentsIntentCaptureRequestPaymentDetailsObjectSchema: TypedSchema<PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject> = typed<PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject>(object({
  get customerReference() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get orderReference() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));