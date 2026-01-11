import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionSavedPaymentMethodOptions
 *
 * 
 */
export interface PaymentPagesCheckoutSessionSavedPaymentMethodOptions {
  /**
   * Uses the `allow_redisplay` value of each saved payment method to filter the set presented to a returning customer. By default, only saved payment methods with ’allow_redisplay: ‘always’ are shown in Checkout.
   */
  allowRedisplayFilters?: Array<string>;
  /**
   * Enable customers to choose if they wish to remove their saved payment methods. Disabled by default.
   */
  paymentMethodRemove?: string;
  /**
   * Enable customers to choose if they wish to save their payment method for future use. Disabled by default.
   */
  paymentMethodSave?: string;
}

export const PaymentPagesCheckoutSessionSavedPaymentMethodOptionsSchema: TypedSchema<PaymentPagesCheckoutSessionSavedPaymentMethodOptions> = typed<PaymentPagesCheckoutSessionSavedPaymentMethodOptions>(object({
  allowRedisplayFilters: optional(array(string())),
  paymentMethodRemove: optional(string()),
  paymentMethodSave: optional(string()),
}));