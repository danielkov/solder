import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestTaxObject } from './PostPaymentIntentsRequestTaxObject';
import { PostPaymentIntentsRequestTaxObjectSchema } from './PostPaymentIntentsRequestTaxObject';
export type PostPaymentIntentsRequestTax = PostPaymentIntentsRequestTaxObject | string;

export const PostPaymentIntentsRequestTaxSchema: TypedSchema<PostPaymentIntentsRequestTax> = typed<PostPaymentIntentsRequestTax>(union(PostPaymentIntentsRequestTaxObjectSchema, string()));