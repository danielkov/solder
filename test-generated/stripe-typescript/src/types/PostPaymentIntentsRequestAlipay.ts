import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestAlipayObject } from './PostPaymentIntentsRequestAlipayObject';
import { PostPaymentIntentsRequestAlipayObjectSchema } from './PostPaymentIntentsRequestAlipayObject';
export type PostPaymentIntentsRequestAlipay = PostPaymentIntentsRequestAlipayObject | string;

export const PostPaymentIntentsRequestAlipaySchema: TypedSchema<PostPaymentIntentsRequestAlipay> = typed<PostPaymentIntentsRequestAlipay>(union(PostPaymentIntentsRequestAlipayObjectSchema, string()));