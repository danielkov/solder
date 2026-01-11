import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay
 *
 * 
 */
export interface PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay {
  /**
   * Type of the apple_pay transaction, one of `apple_pay` or `apple_pay_later`.
   */
  type: string;
}

export const PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePaySchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay> = typed<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay>(object({
  type: string(),
}));