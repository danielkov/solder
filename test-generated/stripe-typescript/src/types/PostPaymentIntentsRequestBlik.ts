import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestBlikObject } from './PostPaymentIntentsRequestBlikObject';
import { PostPaymentIntentsRequestBlikObjectSchema } from './PostPaymentIntentsRequestBlikObject';
export type PostPaymentIntentsRequestBlik = PostPaymentIntentsRequestBlikObject | string;

export const PostPaymentIntentsRequestBlikSchema: TypedSchema<PostPaymentIntentsRequestBlik> = typed<PostPaymentIntentsRequestBlik>(union(PostPaymentIntentsRequestBlikObjectSchema, string()));