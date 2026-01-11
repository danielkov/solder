import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPaymentIntentPresentmentDetails
 *
 * 
 */
export interface PaymentFlowsPaymentIntentPresentmentDetails {
  /**
   * Amount intended to be collected by this payment, denominated in `presentment_currency`.
   */
  presentmentAmount: number;
  /**
   * Currency presented to the customer during payment.
   */
  presentmentCurrency: string;
}

export const PaymentFlowsPaymentIntentPresentmentDetailsSchema: TypedSchema<PaymentFlowsPaymentIntentPresentmentDetails> = typed<PaymentFlowsPaymentIntentPresentmentDetails>(object({
  presentmentAmount: number(),
  presentmentCurrency: string(),
}));