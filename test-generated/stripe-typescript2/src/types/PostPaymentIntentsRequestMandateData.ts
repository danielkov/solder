import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestMandateDataObject } from './PostPaymentIntentsRequestMandateDataObject';
import { PostPaymentIntentsRequestMandateDataObjectSchema } from './PostPaymentIntentsRequestMandateDataObject';
/**
 * This hash contains details about the Mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
 */
export type PostPaymentIntentsRequestMandateData = PostPaymentIntentsRequestMandateDataObject | string;

export const PostPaymentIntentsRequestMandateDataSchema: TypedSchema<PostPaymentIntentsRequestMandateData> = typed<PostPaymentIntentsRequestMandateData>(union(PostPaymentIntentsRequestMandateDataObjectSchema, string()));
