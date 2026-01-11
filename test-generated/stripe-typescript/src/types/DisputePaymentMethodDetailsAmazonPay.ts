import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * DisputePaymentMethodDetailsAmazonPay
 *
 * 
 */
export interface DisputePaymentMethodDetailsAmazonPay {
  /**
   * The AmazonPay dispute type, chargeback or claim
   */
  disputeType?: string;
}

export const DisputePaymentMethodDetailsAmazonPaySchema: TypedSchema<DisputePaymentMethodDetailsAmazonPay> = typed<DisputePaymentMethodDetailsAmazonPay>(object({
  disputeType: optional(string()),
}));