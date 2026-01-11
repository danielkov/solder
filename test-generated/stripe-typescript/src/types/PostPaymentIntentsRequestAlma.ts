import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestAlmaObject } from './PostPaymentIntentsRequestAlmaObject';
import { PostPaymentIntentsRequestAlmaObjectSchema } from './PostPaymentIntentsRequestAlmaObject';
export type PostPaymentIntentsRequestAlma = PostPaymentIntentsRequestAlmaObject | string;

export const PostPaymentIntentsRequestAlmaSchema: TypedSchema<PostPaymentIntentsRequestAlma> = typed<PostPaymentIntentsRequestAlma>(union(PostPaymentIntentsRequestAlmaObjectSchema, string()));