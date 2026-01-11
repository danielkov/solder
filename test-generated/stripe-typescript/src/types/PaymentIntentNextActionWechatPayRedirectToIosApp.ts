import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionWechatPayRedirectToIOSApp
 *
 * 
 */
export interface PaymentIntentNextActionWechatPayRedirectToIosApp {
  /**
   * An universal link that redirect to WeChat Pay app
   */
  nativeUrl: string;
}

export const PaymentIntentNextActionWechatPayRedirectToIosAppSchema: TypedSchema<PaymentIntentNextActionWechatPayRedirectToIosApp> = typed<PaymentIntentNextActionWechatPayRedirectToIosApp>(object({
  nativeUrl: string(),
}));