import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
}

export const PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptionsSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions> = typed<PaymentFlowsPrivatePaymentMethodsSamsungPayPaymentMethodOptions>(object({
  captureMethod: optional(string()),
}));