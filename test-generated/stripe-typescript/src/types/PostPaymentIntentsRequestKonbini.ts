import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestKonbiniObject } from './PostPaymentIntentsRequestKonbiniObject';
import { PostPaymentIntentsRequestKonbiniObjectSchema } from './PostPaymentIntentsRequestKonbiniObject';
export type PostPaymentIntentsRequestKonbini = PostPaymentIntentsRequestKonbiniObject | string;

export const PostPaymentIntentsRequestKonbiniSchema: TypedSchema<PostPaymentIntentsRequestKonbini> = typed<PostPaymentIntentsRequestKonbini>(union(PostPaymentIntentsRequestKonbiniObjectSchema, string()));