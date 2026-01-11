import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_card_checks
 *
 * 
 */
export interface PaymentMethodDetailsCardChecks {
  /**
   * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
   */
  addressLine1Check?: string;
  /**
   * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
   */
  addressPostalCodeCheck?: string;
  /**
   * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
   */
  cvcCheck?: string;
}

export const PaymentMethodDetailsCardChecksSchema: TypedSchema<PaymentMethodDetailsCardChecks> = typed<PaymentMethodDetailsCardChecks>(object({
  addressLine1Check: optional(string()),
  addressPostalCodeCheck: optional(string()),
  cvcCheck: optional(string()),
}));