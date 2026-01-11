import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestAmazonPayObject } from './PostPaymentIntentsRequestAmazonPayObject';
import { PostPaymentIntentsRequestAmazonPayObjectSchema } from './PostPaymentIntentsRequestAmazonPayObject';
export type PostPaymentIntentsRequestAmazonPay = PostPaymentIntentsRequestAmazonPayObject | string;

export const PostPaymentIntentsRequestAmazonPaySchema: TypedSchema<PostPaymentIntentsRequestAmazonPay> = typed<PostPaymentIntentsRequestAmazonPay>(union(PostPaymentIntentsRequestAmazonPayObjectSchema, string()));