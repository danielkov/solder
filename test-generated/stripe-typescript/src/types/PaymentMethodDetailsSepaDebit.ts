import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_sepa_debit
 *
 * 
 */
export interface PaymentMethodDetailsSepaDebit {
  /**
   * Bank code of bank associated with the bank account.
   */
  bankCode?: string;
  /**
   * Branch code of bank associated with the bank account.
   */
  branchCode?: string;
  /**
   * Two-letter ISO code representing the country the bank account is located in.
   */
  country?: string;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string;
  /**
   * Last four characters of the IBAN.
   */
  last4?: string;
  /**
   * Find the ID of the mandate used for this payment under the [payment_method_details.sepa_debit.mandate](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-sepa_debit-mandate) property on the Charge. Use this mandate ID to [retrieve the Mandate](https://stripe.com/docs/api/mandates/retrieve).
   */
  mandate?: string;
}

export const PaymentMethodDetailsSepaDebitSchema: TypedSchema<PaymentMethodDetailsSepaDebit> = typed<PaymentMethodDetailsSepaDebit>(object({
  bankCode: optional(string()),
  branchCode: optional(string()),
  country: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  mandate: optional(string()),
}));