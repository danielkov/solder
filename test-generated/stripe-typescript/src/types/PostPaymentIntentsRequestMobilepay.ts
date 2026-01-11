import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestMobilepayObject } from './PostPaymentIntentsRequestMobilepayObject';
import { PostPaymentIntentsRequestMobilepayObjectSchema } from './PostPaymentIntentsRequestMobilepayObject';
export type PostPaymentIntentsRequestMobilepay = PostPaymentIntentsRequestMobilepayObject | string;

export const PostPaymentIntentsRequestMobilepaySchema: TypedSchema<PostPaymentIntentsRequestMobilepay> = typed<PostPaymentIntentsRequestMobilepay>(union(PostPaymentIntentsRequestMobilepayObjectSchema, string()));