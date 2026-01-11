import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentProcessingCustomerNotification } from './PaymentIntentProcessingCustomerNotification';
import { PaymentIntentProcessingCustomerNotificationSchema } from './PaymentIntentProcessingCustomerNotification';
/**
 * PaymentIntentCardProcessing
 *
 * 
 */
export interface PaymentIntentCardProcessing {
  /**
   * PaymentIntentProcessingCustomerNotification
   *
   * 
   */
  customerNotification?: PaymentIntentProcessingCustomerNotification;
}

export const PaymentIntentCardProcessingSchema: TypedSchema<PaymentIntentCardProcessing> = typed<PaymentIntentCardProcessing>(object({
  get customerNotification() { return optional(PaymentIntentProcessingCustomerNotificationSchema) },
}));