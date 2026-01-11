import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestP24 } from './PostCheckoutSessionsRequestP24';
import { PostCheckoutSessionsRequestP24Schema } from './PostCheckoutSessionsRequestP24';
export type DefaultPostPaymentIntentsRequestP24 = PostCheckoutSessionsRequestP24 | string;

export const DefaultPostPaymentIntentsRequestP24Schema: TypedSchema<DefaultPostPaymentIntentsRequestP24> = typed<DefaultPostPaymentIntentsRequestP24>(union(PostCheckoutSessionsRequestP24Schema, string()));