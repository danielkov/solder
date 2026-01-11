import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsCardDetailsAPIResourceEnterpriseFeaturesOvercaptureOvercapture
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture {
  /**
   * The maximum amount that can be captured.
   */
  maximumAmountCapturable: number;
  /**
   * Indicates whether or not the authorized amount can be over-captured.
   */
  status: string;
}

export const PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercaptureSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture> = typed<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture>(object({
  maximumAmountCapturable: number(),
  status: string(),
}));