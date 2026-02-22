import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestBancontactObject } from './PostPaymentIntentsRequestBancontactObject';
import { PostPaymentIntentsRequestBancontactObjectSchema } from './PostPaymentIntentsRequestBancontactObject';
export type PostPaymentIntentsRequestBancontact = PostPaymentIntentsRequestBancontactObject | string;

export const PostPaymentIntentsRequestBancontactSchema: TypedSchema<PostPaymentIntentsRequestBancontact> = typed<PostPaymentIntentsRequestBancontact>(union(PostPaymentIntentsRequestBancontactObjectSchema, string()));
