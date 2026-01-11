import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkToken
 *
 * 
 */
export interface PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkToken {
  /**
   * Indicates if Stripe used a network token, either user provided or Stripe managed when processing the transaction.
   */
  used: boolean;
}

export const PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkTokenSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkToken> = typed<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkToken>(object({
  used: boolean(),
}));