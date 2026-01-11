import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestAddressObject } from './PostPaymentIntentsRequestAddressObject';
import { PostPaymentIntentsRequestAddressObjectSchema } from './PostPaymentIntentsRequestAddressObject';
export type PostPaymentIntentsRequestAddress = PostPaymentIntentsRequestAddressObject | string;

export const PostPaymentIntentsRequestAddressSchema: TypedSchema<PostPaymentIntentsRequestAddress> = typed<PostPaymentIntentsRequestAddress>(union(PostPaymentIntentsRequestAddressObjectSchema, string()));