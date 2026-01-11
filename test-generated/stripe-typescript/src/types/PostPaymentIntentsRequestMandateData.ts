import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestMandateDataObject } from './PostPaymentIntentsRequestMandateDataObject';
import { PostPaymentIntentsRequestMandateDataObjectSchema } from './PostPaymentIntentsRequestMandateDataObject';
export type PostPaymentIntentsRequestMandateData = PostPaymentIntentsRequestMandateDataObject | string;

export const PostPaymentIntentsRequestMandateDataSchema: TypedSchema<PostPaymentIntentsRequestMandateData> = typed<PostPaymentIntentsRequestMandateData>(union(PostPaymentIntentsRequestMandateDataObjectSchema, string()));