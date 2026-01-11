import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentsPrimitivesPaymentRecordsResourceAddress } from './PaymentsPrimitivesPaymentRecordsResourceAddress';
import { PaymentsPrimitivesPaymentRecordsResourceAddressSchema } from './PaymentsPrimitivesPaymentRecordsResourceAddress';
/**
 * PaymentsPrimitivesPaymentRecordsResourceBillingDetails
 *
 * Billing details used by the customer for this payment.
 */
export interface PaymentsPrimitivesPaymentRecordsResourceBillingDetails {
  /**
   * PaymentsPrimitivesPaymentRecordsResourceAddress
   *
   * A representation of a physical address.
   */
  address: PaymentsPrimitivesPaymentRecordsResourceAddress;
  /**
   * The billing email associated with the method of payment.
   */
  email?: string;
  /**
   * The billing name associated with the method of payment.
   */
  name?: string;
  /**
   * The billing phone number associated with the method of payment.
   */
  phone?: string;
}

export const PaymentsPrimitivesPaymentRecordsResourceBillingDetailsSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourceBillingDetails> = typed<PaymentsPrimitivesPaymentRecordsResourceBillingDetails>(object({
  address: PaymentsPrimitivesPaymentRecordsResourceAddressSchema,
  email: optional(string()),
  name: optional(string()),
  phone: optional(string()),
}));