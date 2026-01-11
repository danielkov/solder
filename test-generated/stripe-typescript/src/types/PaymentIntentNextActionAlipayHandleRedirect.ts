import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionAlipayHandleRedirect
 *
 * 
 */
export interface PaymentIntentNextActionAlipayHandleRedirect {
  /**
   * The native data to be used with Alipay SDK you must redirect your customer to in order to authenticate the payment in an Android App.
   */
  nativeData?: string;
  /**
   * The native URL you must redirect your customer to in order to authenticate the payment in an iOS App.
   */
  nativeUrl?: string;
  /**
   * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
   */
  returnUrl?: string;
  /**
   * The URL you must redirect your customer to in order to authenticate the payment.
   */
  url?: string;
}

export const PaymentIntentNextActionAlipayHandleRedirectSchema: TypedSchema<PaymentIntentNextActionAlipayHandleRedirect> = typed<PaymentIntentNextActionAlipayHandleRedirect>(object({
  nativeData: optional(string()),
  nativeUrl: optional(string()),
  returnUrl: optional(string()),
  url: optional(string()),
}));