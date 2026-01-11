import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_wechat_pay
 *
 * 
 */
export interface PaymentMethodDetailsWechatPay {
  /**
   * Uniquely identifies this particular WeChat Pay account. You can use this attribute to check whether two WeChat accounts are the same.
   */
  fingerprint?: string;
  /**
   * ID of the [location](https://stripe.com/docs/api/terminal/locations) that this transaction's reader is assigned to.
   */
  location?: string;
  /**
   * ID of the [reader](https://stripe.com/docs/api/terminal/readers) this transaction was made on.
   */
  reader?: string;
  /**
   * Transaction ID of this particular WeChat Pay transaction.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsWechatPaySchema: TypedSchema<PaymentMethodDetailsWechatPay> = typed<PaymentMethodDetailsWechatPay>(object({
  fingerprint: optional(string()),
  location: optional(string()),
  reader: optional(string()),
  transactionId: optional(string()),
}));