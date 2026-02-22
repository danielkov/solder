import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentRequestPaymentDetailsObject } from './PostPaymentIntentsIntentRequestPaymentDetailsObject';
import { PostPaymentIntentsIntentRequestPaymentDetailsObjectSchema } from './PostPaymentIntentsIntentRequestPaymentDetailsObject';
/**
 * Provides industry-specific information about the charge.
 */
export type PostPaymentIntentsIntentRequestPaymentDetails = PostPaymentIntentsIntentRequestPaymentDetailsObject | string;

export const PostPaymentIntentsIntentRequestPaymentDetailsSchema: TypedSchema<PostPaymentIntentsIntentRequestPaymentDetails> = typed<PostPaymentIntentsIntentRequestPaymentDetails>(union(PostPaymentIntentsIntentRequestPaymentDetailsObjectSchema, string()));
