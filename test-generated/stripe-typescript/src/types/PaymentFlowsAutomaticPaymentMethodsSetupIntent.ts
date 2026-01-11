import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsAutomaticPaymentMethodsSetupIntent
 *
 * 
 */
export interface PaymentFlowsAutomaticPaymentMethodsSetupIntent {
  /**
   * Controls whether this SetupIntent will accept redirect-based payment methods.

Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/setup_intents/confirm) this SetupIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the setup.
   */
  allowRedirects?: string;
  /**
   * Automatically calculates compatible payment methods
   */
  enabled?: boolean;
}

export const PaymentFlowsAutomaticPaymentMethodsSetupIntentSchema: TypedSchema<PaymentFlowsAutomaticPaymentMethodsSetupIntent> = typed<PaymentFlowsAutomaticPaymentMethodsSetupIntent>(object({
  allowRedirects: optional(string()),
  enabled: optional(boolean()),
}));