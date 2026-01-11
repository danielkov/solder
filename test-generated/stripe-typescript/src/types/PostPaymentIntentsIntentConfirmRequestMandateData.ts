import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentConfirmRequestMandateDataObject } from './PostPaymentIntentsIntentConfirmRequestMandateDataObject';
import { PostPaymentIntentsIntentConfirmRequestMandateDataObjectSchema } from './PostPaymentIntentsIntentConfirmRequestMandateDataObject';
import type { PostPaymentIntentsRequestMandateDataObject } from './PostPaymentIntentsRequestMandateDataObject';
import { PostPaymentIntentsRequestMandateDataObjectSchema } from './PostPaymentIntentsRequestMandateDataObject';
export type PostPaymentIntentsIntentConfirmRequestMandateData = PostPaymentIntentsRequestMandateDataObject | string | PostPaymentIntentsIntentConfirmRequestMandateDataObject;

export const PostPaymentIntentsIntentConfirmRequestMandateDataSchema: TypedSchema<PostPaymentIntentsIntentConfirmRequestMandateData> = typed<PostPaymentIntentsIntentConfirmRequestMandateData>(union(PostPaymentIntentsRequestMandateDataObjectSchema, string(), PostPaymentIntentsIntentConfirmRequestMandateDataObjectSchema));