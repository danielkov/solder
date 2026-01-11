import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * setup_intent_payment_method_options_klarna
 *
 * 
 */
export interface SetupIntentPaymentMethodOptionsKlarna {
  /**
   * The currency of the setup intent. Three letter ISO currency code.
   */
  currency?: string;
  /**
   * Preferred locale of the Klarna checkout page that the customer is redirected to.
   */
  preferredLocale?: string;
}

export const SetupIntentPaymentMethodOptionsKlarnaSchema: TypedSchema<SetupIntentPaymentMethodOptionsKlarna> = typed<SetupIntentPaymentMethodOptionsKlarna>(object({
  currency: optional(string()),
  preferredLocale: optional(string()),
}));