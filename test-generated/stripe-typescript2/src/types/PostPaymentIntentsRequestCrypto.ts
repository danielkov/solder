import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestAlipay } from './PostCheckoutSessionsRequestAlipay';
import { PostCheckoutSessionsRequestAlipaySchema } from './PostCheckoutSessionsRequestAlipay';
export type PostPaymentIntentsRequestCrypto = PostCheckoutSessionsRequestAlipay | string;

export const PostPaymentIntentsRequestCryptoSchema: TypedSchema<PostPaymentIntentsRequestCrypto> = typed<PostPaymentIntentsRequestCrypto>(union(PostCheckoutSessionsRequestAlipaySchema, string()));
