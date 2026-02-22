import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject } from './PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject';
import { PostPaymentIntentsIntentCaptureRequestPaymentDetailsObjectSchema } from './PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject';
/**
 * Provides industry-specific information about the charge.
 */
export type PostPaymentIntentsIntentCaptureRequestPaymentDetails = PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject | string;

export const PostPaymentIntentsIntentCaptureRequestPaymentDetailsSchema: TypedSchema<PostPaymentIntentsIntentCaptureRequestPaymentDetails> = typed<PostPaymentIntentsIntentCaptureRequestPaymentDetails>(union(PostPaymentIntentsIntentCaptureRequestPaymentDetailsObjectSchema, string()));
