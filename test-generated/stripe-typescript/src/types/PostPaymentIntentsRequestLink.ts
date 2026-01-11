import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestLinkObject } from './PostPaymentIntentsRequestLinkObject';
import { PostPaymentIntentsRequestLinkObjectSchema } from './PostPaymentIntentsRequestLinkObject';
export type PostPaymentIntentsRequestLink = PostPaymentIntentsRequestLinkObject | string;

export const PostPaymentIntentsRequestLinkSchema: TypedSchema<PostPaymentIntentsRequestLink> = typed<PostPaymentIntentsRequestLink>(union(PostPaymentIntentsRequestLinkObjectSchema, string()));