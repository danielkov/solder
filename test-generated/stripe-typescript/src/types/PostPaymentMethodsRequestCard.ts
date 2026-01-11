import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentMethodsRequestCardObject } from './DefaultPostPaymentMethodsRequestCardObject';
import { DefaultPostPaymentMethodsRequestCardObjectSchema } from './DefaultPostPaymentMethodsRequestCardObject';
import type { PostPaymentMethodsRequestCardObject } from './PostPaymentMethodsRequestCardObject';
import { PostPaymentMethodsRequestCardObjectSchema } from './PostPaymentMethodsRequestCardObject';
export type PostPaymentMethodsRequestCard = PostPaymentMethodsRequestCardObject | DefaultPostPaymentMethodsRequestCardObject;

export const PostPaymentMethodsRequestCardSchema: TypedSchema<PostPaymentMethodsRequestCard> = typed<PostPaymentMethodsRequestCard>(union(PostPaymentMethodsRequestCardObjectSchema, DefaultPostPaymentMethodsRequestCardObjectSchema));