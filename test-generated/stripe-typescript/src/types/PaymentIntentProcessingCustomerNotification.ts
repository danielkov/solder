import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentProcessingCustomerNotification
 *
 * 
 */
export interface PaymentIntentProcessingCustomerNotification {
  /**
   * Whether customer approval has been requested for this payment. For payments greater than INR 15000 or mandate amount, the customer must provide explicit approval of the payment with their bank.
   */
  approvalRequested?: boolean;
  /**
   * If customer approval is required, they need to provide approval before this time.
   */
  completesAt?: number;
}

export const PaymentIntentProcessingCustomerNotificationSchema: TypedSchema<PaymentIntentProcessingCustomerNotification> = typed<PaymentIntentProcessingCustomerNotification>(object({
  approvalRequested: optional(boolean()),
  completesAt: optional(number()),
}));