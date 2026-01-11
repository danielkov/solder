import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentsPrimitivesPaymentRecordsResourceCustomerDetails
 *
 * Information about the customer for this payment.
 */
export interface PaymentsPrimitivesPaymentRecordsResourceCustomerDetails {
  /**
   * ID of the Stripe Customer associated with this payment.
   */
  customer?: string;
  /**
   * The customer's email address.
   */
  email?: string;
  /**
   * The customer's name.
   */
  name?: string;
  /**
   * The customer's phone number.
   */
  phone?: string;
}

export const PaymentsPrimitivesPaymentRecordsResourceCustomerDetailsSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourceCustomerDetails> = typed<PaymentsPrimitivesPaymentRecordsResourceCustomerDetails>(object({
  customer: optional(string()),
  email: optional(string()),
  name: optional(string()),
  phone: optional(string()),
}));