import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentRequestAmountDetailsObject } from './PostPaymentIntentsIntentRequestAmountDetailsObject';
import { PostPaymentIntentsIntentRequestAmountDetailsObjectSchema } from './PostPaymentIntentsIntentRequestAmountDetailsObject';
/**
 * Provides industry-specific information about the amount.
 */
export type PostPaymentIntentsIntentRequestAmountDetails = PostPaymentIntentsIntentRequestAmountDetailsObject | string;

export const PostPaymentIntentsIntentRequestAmountDetailsSchema: TypedSchema<PostPaymentIntentsIntentRequestAmountDetails> = typed<PostPaymentIntentsIntentRequestAmountDetails>(union(PostPaymentIntentsIntentRequestAmountDetailsObjectSchema, string()));
