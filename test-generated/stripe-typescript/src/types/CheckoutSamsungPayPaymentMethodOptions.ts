import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CheckoutSamsungPayPaymentMethodOptions
 *
 * 
 */
export interface CheckoutSamsungPayPaymentMethodOptions {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
}

export const CheckoutSamsungPayPaymentMethodOptionsSchema: TypedSchema<CheckoutSamsungPayPaymentMethodOptions> = typed<CheckoutSamsungPayPaymentMethodOptions>(object({
  captureMethod: optional(string()),
}));