import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * checkout_payment_method_options_mandate_options_sepa_debit
 *
 * 
 */
export interface CheckoutPaymentMethodOptionsMandateOptionsSepaDebit {
  /**
   * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
   */
  referencePrefix?: string;
}

export const CheckoutPaymentMethodOptionsMandateOptionsSepaDebitSchema: TypedSchema<CheckoutPaymentMethodOptionsMandateOptionsSepaDebit> = typed<CheckoutPaymentMethodOptionsMandateOptionsSepaDebit>(object({
  referencePrefix: optional(string()),
}));