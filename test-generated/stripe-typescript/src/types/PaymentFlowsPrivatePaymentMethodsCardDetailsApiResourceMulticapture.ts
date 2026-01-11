import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsCardDetailsAPIResourceMulticapture
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture {
  /**
   * Indicates whether or not multiple captures are supported.
   */
  status: string;
}

export const PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticaptureSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture> = typed<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture>(object({
  status: string(),
}));