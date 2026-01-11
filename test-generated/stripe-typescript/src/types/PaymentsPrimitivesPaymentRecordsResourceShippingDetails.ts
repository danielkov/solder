import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentsPrimitivesPaymentRecordsResourceAddress } from './PaymentsPrimitivesPaymentRecordsResourceAddress';
import { PaymentsPrimitivesPaymentRecordsResourceAddressSchema } from './PaymentsPrimitivesPaymentRecordsResourceAddress';
/**
 * PaymentsPrimitivesPaymentRecordsResourceShippingDetails
 *
 * The customer's shipping information associated with this payment.
 */
export interface PaymentsPrimitivesPaymentRecordsResourceShippingDetails {
  /**
   * PaymentsPrimitivesPaymentRecordsResourceAddress
   *
   * A representation of a physical address.
   */
  address: PaymentsPrimitivesPaymentRecordsResourceAddress;
  /**
   * The shipping recipient's name.
   */
  name?: string;
  /**
   * The shipping recipient's phone number.
   */
  phone?: string;
}

export const PaymentsPrimitivesPaymentRecordsResourceShippingDetailsSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourceShippingDetails> = typed<PaymentsPrimitivesPaymentRecordsResourceShippingDetails>(object({
  address: PaymentsPrimitivesPaymentRecordsResourceAddressSchema,
  name: optional(string()),
  phone: optional(string()),
}));