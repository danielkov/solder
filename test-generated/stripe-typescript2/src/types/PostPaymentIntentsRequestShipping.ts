import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestShippingObject } from './PostPaymentIntentsRequestShippingObject';
import { PostPaymentIntentsRequestShippingObjectSchema } from './PostPaymentIntentsRequestShippingObject';
export type PostPaymentIntentsRequestShipping = PostPaymentIntentsRequestShippingObject | string;

export const PostPaymentIntentsRequestShippingSchema: TypedSchema<PostPaymentIntentsRequestShipping> = typed<PostPaymentIntentsRequestShipping>(union(PostPaymentIntentsRequestShippingObjectSchema, string()));
