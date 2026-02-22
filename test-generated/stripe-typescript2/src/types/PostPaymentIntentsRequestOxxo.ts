import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestKonbini } from './PostCheckoutSessionsRequestKonbini';
import { PostCheckoutSessionsRequestKonbiniSchema } from './PostCheckoutSessionsRequestKonbini';
export type PostPaymentIntentsRequestOxxo = PostCheckoutSessionsRequestKonbini | string;

export const PostPaymentIntentsRequestOxxoSchema: TypedSchema<PostPaymentIntentsRequestOxxo> = typed<PostPaymentIntentsRequestOxxo>(union(PostCheckoutSessionsRequestKonbiniSchema, string()));
