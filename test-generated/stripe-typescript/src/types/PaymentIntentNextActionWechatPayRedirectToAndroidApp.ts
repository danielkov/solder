import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionWechatPayRedirectToAndroidApp
 *
 * 
 */
export interface PaymentIntentNextActionWechatPayRedirectToAndroidApp {
  /**
   * app_id is the APP ID registered on WeChat open platform
   */
  appId: string;
  /**
   * nonce_str is a random string
   */
  nonceStr: string;
  /**
   * package is static value
   */
  package: string;
  /**
   * an unique merchant ID assigned by WeChat Pay
   */
  partnerId: string;
  /**
   * an unique trading ID assigned by WeChat Pay
   */
  prepayId: string;
  /**
   * A signature
   */
  sign: string;
  /**
   * Specifies the current time in epoch format
   */
  timestamp: string;
}

export const PaymentIntentNextActionWechatPayRedirectToAndroidAppSchema: TypedSchema<PaymentIntentNextActionWechatPayRedirectToAndroidApp> = typed<PaymentIntentNextActionWechatPayRedirectToAndroidApp>(object({
  appId: string(),
  nonceStr: string(),
  package: string(),
  partnerId: string(),
  prepayId: string(),
  sign: string(),
  timestamp: string(),
}));