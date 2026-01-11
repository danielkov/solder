import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestCardObject } from './PostPaymentIntentsRequestCardObject';
import { PostPaymentIntentsRequestCardObjectSchema } from './PostPaymentIntentsRequestCardObject';
export type PostPaymentIntentsRequestCard = PostPaymentIntentsRequestCardObject | string;

export const PostPaymentIntentsRequestCardSchema: TypedSchema<PostPaymentIntentsRequestCard> = typed<PostPaymentIntentsRequestCard>(union(PostPaymentIntentsRequestCardObjectSchema, string()));