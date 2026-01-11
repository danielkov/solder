import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestWechatPayObject } from './PostPaymentIntentsRequestWechatPayObject';
import { PostPaymentIntentsRequestWechatPayObjectSchema } from './PostPaymentIntentsRequestWechatPayObject';
export type PostPaymentIntentsRequestWechatPay = PostPaymentIntentsRequestWechatPayObject | string;

export const PostPaymentIntentsRequestWechatPaySchema: TypedSchema<PostPaymentIntentsRequestWechatPay> = typed<PostPaymentIntentsRequestWechatPay>(union(PostPaymentIntentsRequestWechatPayObjectSchema, string()));