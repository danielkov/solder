import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestSwishObject } from './PostPaymentIntentsRequestSwishObject';
import { PostPaymentIntentsRequestSwishObjectSchema } from './PostPaymentIntentsRequestSwishObject';
export type PostPaymentIntentsRequestSwish = PostPaymentIntentsRequestSwishObject | string;

export const PostPaymentIntentsRequestSwishSchema: TypedSchema<PostPaymentIntentsRequestSwish> = typed<PostPaymentIntentsRequestSwish>(union(PostPaymentIntentsRequestSwishObjectSchema, string()));