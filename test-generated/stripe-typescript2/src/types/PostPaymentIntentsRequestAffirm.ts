import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestAffirmObject } from './PostPaymentIntentsRequestAffirmObject';
import { PostPaymentIntentsRequestAffirmObjectSchema } from './PostPaymentIntentsRequestAffirmObject';
export type PostPaymentIntentsRequestAffirm = PostPaymentIntentsRequestAffirmObject | string;

export const PostPaymentIntentsRequestAffirmSchema: TypedSchema<PostPaymentIntentsRequestAffirm> = typed<PostPaymentIntentsRequestAffirm>(union(PostPaymentIntentsRequestAffirmObjectSchema, string()));
