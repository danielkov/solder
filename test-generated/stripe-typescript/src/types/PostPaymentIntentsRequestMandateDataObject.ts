import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestMandateDataObjectCustomerAcceptance } from './PostPaymentIntentsRequestMandateDataObjectCustomerAcceptance';
import { PostPaymentIntentsRequestMandateDataObjectCustomerAcceptanceSchema } from './PostPaymentIntentsRequestMandateDataObjectCustomerAcceptance';
/**
 * secret_key_param
 */
export interface PostPaymentIntentsRequestMandateDataObject {
  /**
   * customer_acceptance_param
   */
  customerAcceptance: PostPaymentIntentsRequestMandateDataObjectCustomerAcceptance;
}

export const PostPaymentIntentsRequestMandateDataObjectSchema: TypedSchema<PostPaymentIntentsRequestMandateDataObject> = typed<PostPaymentIntentsRequestMandateDataObject>(object({
  customerAcceptance: PostPaymentIntentsRequestMandateDataObjectCustomerAcceptanceSchema,
}));