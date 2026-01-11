import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestMandateDataObject } from './PostPaymentIntentsRequestMandateDataObject';
import { PostPaymentIntentsRequestMandateDataObjectSchema } from './PostPaymentIntentsRequestMandateDataObject';
export type PostSetupIntentsRequestMandateData = PostPaymentIntentsRequestMandateDataObject | string;

export const PostSetupIntentsRequestMandateDataSchema: TypedSchema<PostSetupIntentsRequestMandateData> = typed<PostSetupIntentsRequestMandateData>(union(PostPaymentIntentsRequestMandateDataObjectSchema, string()));