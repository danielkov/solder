import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CheckoutPaycoPaymentMethodOptions
 *
 * 
 */
export interface CheckoutPaycoPaymentMethodOptions {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
}

export const CheckoutPaycoPaymentMethodOptionsSchema: TypedSchema<CheckoutPaycoPaymentMethodOptions> = typed<CheckoutPaycoPaymentMethodOptions>(object({
  captureMethod: optional(string()),
}));