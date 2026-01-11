import { TypedSchema, number, object, optional, string, typed, unknown } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestMandateDataObjectOnline } from './PostPaymentIntentsRequestMandateDataObjectOnline';
import { PostPaymentIntentsRequestMandateDataObjectOnlineSchema } from './PostPaymentIntentsRequestMandateDataObjectOnline';
/**
 * customer_acceptance_param
 */
export interface PostPaymentIntentsRequestMandateDataObjectCustomerAcceptance {
  acceptedAt?: number;
  /**
   * offline_param
   */
  offline?: any;
  /**
   * online_param
   */
  online?: PostPaymentIntentsRequestMandateDataObjectOnline;
  type: string;
}

export const PostPaymentIntentsRequestMandateDataObjectCustomerAcceptanceSchema: TypedSchema<PostPaymentIntentsRequestMandateDataObjectCustomerAcceptance> = typed<PostPaymentIntentsRequestMandateDataObjectCustomerAcceptance>(object({
  acceptedAt: optional(number()),
  offline: optional(unknown()),
  get online() { return optional(PostPaymentIntentsRequestMandateDataObjectOnlineSchema) },
  type: string(),
}));