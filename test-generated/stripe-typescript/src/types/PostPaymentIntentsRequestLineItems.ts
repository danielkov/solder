import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestLineItemsObject } from './PostPaymentIntentsRequestLineItemsObject';
import { PostPaymentIntentsRequestLineItemsObjectSchema } from './PostPaymentIntentsRequestLineItemsObject';
export type PostPaymentIntentsRequestLineItems = Array<PostPaymentIntentsRequestLineItemsObject> | string;

export const PostPaymentIntentsRequestLineItemsSchema: TypedSchema<PostPaymentIntentsRequestLineItems> = typed<PostPaymentIntentsRequestLineItems>(union(array(PostPaymentIntentsRequestLineItemsObjectSchema), string()));