import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestPixObject } from './PostPaymentIntentsRequestPixObject';
import { PostPaymentIntentsRequestPixObjectSchema } from './PostPaymentIntentsRequestPixObject';
export type PostPaymentIntentsRequestPix = PostPaymentIntentsRequestPixObject | string;

export const PostPaymentIntentsRequestPixSchema: TypedSchema<PostPaymentIntentsRequestPix> = typed<PostPaymentIntentsRequestPix>(union(PostPaymentIntentsRequestPixObjectSchema, string()));