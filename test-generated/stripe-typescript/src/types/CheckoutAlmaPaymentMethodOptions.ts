import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CheckoutAlmaPaymentMethodOptions
 *
 * 
 */
export interface CheckoutAlmaPaymentMethodOptions {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
}

export const CheckoutAlmaPaymentMethodOptionsSchema: TypedSchema<CheckoutAlmaPaymentMethodOptions> = typed<CheckoutAlmaPaymentMethodOptions>(object({
  captureMethod: optional(string()),
}));