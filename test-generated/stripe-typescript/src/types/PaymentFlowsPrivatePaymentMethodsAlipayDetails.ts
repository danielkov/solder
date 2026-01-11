import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsAlipayDetails
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsAlipayDetails {
  /**
   * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
   */
  buyerId?: string;
  /**
   * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
   */
  fingerprint?: string;
  /**
   * Transaction ID of this particular Alipay transaction.
   */
  transactionId?: string;
}

export const PaymentFlowsPrivatePaymentMethodsAlipayDetailsSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsAlipayDetails> = typed<PaymentFlowsPrivatePaymentMethodsAlipayDetails>(object({
  buyerId: optional(string()),
  fingerprint: optional(string()),
  transactionId: optional(string()),
}));