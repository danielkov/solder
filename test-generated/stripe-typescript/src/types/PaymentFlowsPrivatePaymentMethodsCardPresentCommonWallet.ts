import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet {
  /**
   * The type of mobile wallet, one of `apple_pay`, `google_pay`, `samsung_pay`, or `unknown`.
   */
  type: string;
}

export const PaymentFlowsPrivatePaymentMethodsCardPresentCommonWalletSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet> = typed<PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet>(object({
  type: string(),
}));