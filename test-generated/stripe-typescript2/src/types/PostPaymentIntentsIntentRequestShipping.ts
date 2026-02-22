import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentRequestShippingObject } from './PostPaymentIntentsIntentRequestShippingObject';
import { PostPaymentIntentsIntentRequestShippingObjectSchema } from './PostPaymentIntentsIntentRequestShippingObject';
/**
 * Shipping information for this PaymentIntent.
 */
export type PostPaymentIntentsIntentRequestShipping = PostPaymentIntentsIntentRequestShippingObject | string;

export const PostPaymentIntentsIntentRequestShippingSchema: TypedSchema<PostPaymentIntentsIntentRequestShipping> = typed<PostPaymentIntentsIntentRequestShipping>(union(PostPaymentIntentsIntentRequestShippingObjectSchema, string()));
