import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestCashappObject } from './PostPaymentIntentsRequestCashappObject';
import { PostPaymentIntentsRequestCashappObjectSchema } from './PostPaymentIntentsRequestCashappObject';
export type PostPaymentIntentsRequestCashapp = PostPaymentIntentsRequestCashappObject | string;

export const PostPaymentIntentsRequestCashappSchema: TypedSchema<PostPaymentIntentsRequestCashapp> = typed<PostPaymentIntentsRequestCashapp>(union(PostPaymentIntentsRequestCashappObjectSchema, string()));