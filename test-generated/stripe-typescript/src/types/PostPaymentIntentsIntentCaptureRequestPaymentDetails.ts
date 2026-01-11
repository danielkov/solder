import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject } from './PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject';
import { PostPaymentIntentsIntentCaptureRequestPaymentDetailsObjectSchema } from './PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject';
export type PostPaymentIntentsIntentCaptureRequestPaymentDetails = PostPaymentIntentsIntentCaptureRequestPaymentDetailsObject | string;

export const PostPaymentIntentsIntentCaptureRequestPaymentDetailsSchema: TypedSchema<PostPaymentIntentsIntentCaptureRequestPaymentDetails> = typed<PostPaymentIntentsIntentCaptureRequestPaymentDetails>(union(PostPaymentIntentsIntentCaptureRequestPaymentDetailsObjectSchema, string()));