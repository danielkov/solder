import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptance } from './PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptance';
import { PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptanceSchema } from './PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptance';
/**
 * client_key_param
 *
 * This hash contains details about the Mandate to create
 */
export interface PostPaymentIntentsIntentConfirmRequestMandateDataObject {
  /**
   * customer_acceptance_param
   */
  customerAcceptance: PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptance;
}

export const PostPaymentIntentsIntentConfirmRequestMandateDataObjectSchema: TypedSchema<PostPaymentIntentsIntentConfirmRequestMandateDataObject> = typed<PostPaymentIntentsIntentConfirmRequestMandateDataObject>(object({
  customerAcceptance: PostPaymentIntentsIntentConfirmRequestMandateDataObjectCustomerAcceptanceSchema,
}));