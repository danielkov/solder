import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * checkout_payment_method_options_mandate_options_bacs_debit
 *
 * 
 */
export interface CheckoutPaymentMethodOptionsMandateOptionsBacsDebit {
  /**
   * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
   */
  referencePrefix?: string;
}

export const CheckoutPaymentMethodOptionsMandateOptionsBacsDebitSchema: TypedSchema<CheckoutPaymentMethodOptionsMandateOptionsBacsDebit> = typed<CheckoutPaymentMethodOptionsMandateOptionsBacsDebit>(object({
  referencePrefix: optional(string()),
}));