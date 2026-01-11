import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * setup_intent_payment_method_options_mandate_options_sepa_debit
 *
 * 
 */
export interface SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit {
  /**
   * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
   */
  referencePrefix?: string;
}

export const SetupIntentPaymentMethodOptionsMandateOptionsSepaDebitSchema: TypedSchema<SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit> = typed<SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit>(object({
  referencePrefix: optional(string()),
}));