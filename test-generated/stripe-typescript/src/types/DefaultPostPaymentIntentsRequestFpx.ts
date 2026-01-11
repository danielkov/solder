import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestBancontact } from './PostCheckoutSessionsRequestBancontact';
import { PostCheckoutSessionsRequestBancontactSchema } from './PostCheckoutSessionsRequestBancontact';
export type DefaultPostPaymentIntentsRequestFpx = PostCheckoutSessionsRequestBancontact | string;

export const DefaultPostPaymentIntentsRequestFpxSchema: TypedSchema<DefaultPostPaymentIntentsRequestFpx> = typed<DefaultPostPaymentIntentsRequestFpx>(union(PostCheckoutSessionsRequestBancontactSchema, string()));