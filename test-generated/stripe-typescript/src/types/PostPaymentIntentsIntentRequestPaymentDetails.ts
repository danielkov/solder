import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentRequestPaymentDetailsObject } from './PostPaymentIntentsIntentRequestPaymentDetailsObject';
import { PostPaymentIntentsIntentRequestPaymentDetailsObjectSchema } from './PostPaymentIntentsIntentRequestPaymentDetailsObject';
export type PostPaymentIntentsIntentRequestPaymentDetails = PostPaymentIntentsIntentRequestPaymentDetailsObject | string;

export const PostPaymentIntentsIntentRequestPaymentDetailsSchema: TypedSchema<PostPaymentIntentsIntentRequestPaymentDetails> = typed<PostPaymentIntentsIntentRequestPaymentDetails>(union(PostPaymentIntentsIntentRequestPaymentDetailsObjectSchema, string()));