import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestCardPresentObject } from './PostPaymentIntentsRequestCardPresentObject';
import { PostPaymentIntentsRequestCardPresentObjectSchema } from './PostPaymentIntentsRequestCardPresentObject';
export type PostPaymentIntentsRequestCardPresent = PostPaymentIntentsRequestCardPresentObject | string;

export const PostPaymentIntentsRequestCardPresentSchema: TypedSchema<PostPaymentIntentsRequestCardPresent> = typed<PostPaymentIntentsRequestCardPresent>(union(PostPaymentIntentsRequestCardPresentObjectSchema, string()));
