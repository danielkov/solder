import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionCardAwaitNotification
 *
 * 
 */
export interface PaymentIntentNextActionCardAwaitNotification {
  /**
   * The time that payment will be attempted. If customer approval is required, they need to provide approval before this time.
   */
  chargeAttemptAt?: number;
  /**
   * For payments greater than INR 15000, the customer must provide explicit approval of the payment with their bank. For payments of lower amount, no customer action is required.
   */
  customerApprovalRequired?: boolean;
}

export const PaymentIntentNextActionCardAwaitNotificationSchema: TypedSchema<PaymentIntentNextActionCardAwaitNotification> = typed<PaymentIntentNextActionCardAwaitNotification>(object({
  chargeAttemptAt: optional(number()),
  customerApprovalRequired: optional(boolean()),
}));