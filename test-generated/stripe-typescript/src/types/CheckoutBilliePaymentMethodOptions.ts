import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CheckoutBilliePaymentMethodOptions
 *
 * 
 */
export interface CheckoutBilliePaymentMethodOptions {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
}

export const CheckoutBilliePaymentMethodOptionsSchema: TypedSchema<CheckoutBilliePaymentMethodOptions> = typed<CheckoutBilliePaymentMethodOptions>(object({
  captureMethod: optional(string()),
}));