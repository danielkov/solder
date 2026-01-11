import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_affirm
 *
 * 
 */
export interface PaymentMethodDetailsAffirm {
  /**
   * ID of the [location](https://stripe.com/docs/api/terminal/locations) that this transaction's reader is assigned to.
   */
  location?: string;
  /**
   * ID of the [reader](https://stripe.com/docs/api/terminal/readers) this transaction was made on.
   */
  reader?: string;
  /**
   * The Affirm transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsAffirmSchema: TypedSchema<PaymentMethodDetailsAffirm> = typed<PaymentMethodDetailsAffirm>(object({
  location: optional(string()),
  reader: optional(string()),
  transactionId: optional(string()),
}));