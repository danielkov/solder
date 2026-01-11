import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestCustomerBalanceObject } from './PostPaymentIntentsRequestCustomerBalanceObject';
import { PostPaymentIntentsRequestCustomerBalanceObjectSchema } from './PostPaymentIntentsRequestCustomerBalanceObject';
export type PostPaymentIntentsRequestCustomerBalance = PostPaymentIntentsRequestCustomerBalanceObject | string;

export const PostPaymentIntentsRequestCustomerBalanceSchema: TypedSchema<PostPaymentIntentsRequestCustomerBalance> = typed<PostPaymentIntentsRequestCustomerBalance>(union(PostPaymentIntentsRequestCustomerBalanceObjectSchema, string()));