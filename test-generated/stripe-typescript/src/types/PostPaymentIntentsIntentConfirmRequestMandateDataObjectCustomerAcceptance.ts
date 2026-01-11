import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnline } from './PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnline';
import { PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnlineSchema } from './PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnline';
/**
 * customer_acceptance_param
 */
export interface PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptance {
  /**
   * online_param
   */
  online: PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnline;
  type: string;
}

export const PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptanceSchema: TypedSchema<PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptance> = typed<PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptance>(object({
  online: PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnlineSchema,
  type: string(),
}));