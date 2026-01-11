import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentRequestAmountDetailsObject } from './PostPaymentIntentsIntentRequestAmountDetailsObject';
import { PostPaymentIntentsIntentRequestAmountDetailsObjectSchema } from './PostPaymentIntentsIntentRequestAmountDetailsObject';
export type PostPaymentIntentsIntentRequestAmountDetails = PostPaymentIntentsIntentRequestAmountDetailsObject | string;

export const PostPaymentIntentsIntentRequestAmountDetailsSchema: TypedSchema<PostPaymentIntentsIntentRequestAmountDetails> = typed<PostPaymentIntentsIntentRequestAmountDetails>(union(PostPaymentIntentsIntentRequestAmountDetailsObjectSchema, string()));