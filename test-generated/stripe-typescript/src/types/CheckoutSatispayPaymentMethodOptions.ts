import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CheckoutSatispayPaymentMethodOptions
 *
 * 
 */
export interface CheckoutSatispayPaymentMethodOptions {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
}

export const CheckoutSatispayPaymentMethodOptionsSchema: TypedSchema<CheckoutSatispayPaymentMethodOptions> = typed<CheckoutSatispayPaymentMethodOptions>(object({
  captureMethod: optional(string()),
}));