import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestMandateDataObject } from './PostPaymentIntentsRequestMandateDataObject';
import { PostPaymentIntentsRequestMandateDataObjectSchema } from './PostPaymentIntentsRequestMandateDataObject';
/**
 * This hash contains details about the mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
 */
export type PostSetupIntentsRequestMandateData = PostPaymentIntentsRequestMandateDataObject | string;

export const PostSetupIntentsRequestMandateDataSchema: TypedSchema<PostSetupIntentsRequestMandateData> = typed<PostSetupIntentsRequestMandateData>(union(PostPaymentIntentsRequestMandateDataObjectSchema, string()));
