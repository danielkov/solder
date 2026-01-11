import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestPaypal } from './PostCheckoutSessionsRequestPaypal';
import { PostCheckoutSessionsRequestPaypalSchema } from './PostCheckoutSessionsRequestPaypal';
export type PostPaymentIntentsRequestPaypal = PostCheckoutSessionsRequestPaypal | string;

export const PostPaymentIntentsRequestPaypalSchema: TypedSchema<PostPaymentIntentsRequestPaypal> = typed<PostPaymentIntentsRequestPaypal>(union(PostCheckoutSessionsRequestPaypalSchema, string()));