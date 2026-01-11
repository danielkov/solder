import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CheckoutSwishPaymentMethodOptions
 *
 * 
 */
export interface CheckoutSwishPaymentMethodOptions {
  /**
   * The order reference that will be displayed to customers in the Swish application. Defaults to the `id` of the Payment Intent.
   */
  reference?: string;
}

export const CheckoutSwishPaymentMethodOptionsSchema: TypedSchema<CheckoutSwishPaymentMethodOptions> = typed<CheckoutSwishPaymentMethodOptions>(object({
  reference: optional(string()),
}));