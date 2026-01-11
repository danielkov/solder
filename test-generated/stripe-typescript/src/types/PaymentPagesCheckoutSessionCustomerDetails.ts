import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { PaymentPagesCheckoutSessionTaxId } from './PaymentPagesCheckoutSessionTaxId';
import { PaymentPagesCheckoutSessionTaxIdSchema } from './PaymentPagesCheckoutSessionTaxId';
/**
 * PaymentPagesCheckoutSessionCustomerDetails
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCustomerDetails {
  /**
   * The customer's address after a completed Checkout Session. Note: This property is populated only for sessions on or after March 30, 2022.
   */
  address?: Address;
  /**
   * The customer's business name after a completed Checkout Session.
   */
  businessName?: string;
  /**
   * The email associated with the Customer, if one exists, on the Checkout Session after a completed Checkout Session or at time of session expiry.
Otherwise, if the customer has consented to promotional content, this value is the most recent valid email provided by the customer on the Checkout form.
   */
  email?: string;
  /**
   * The customer's individual name after a completed Checkout Session.
   */
  individualName?: string;
  /**
   * The customer's name after a completed Checkout Session. Note: This property is populated only for sessions on or after March 30, 2022.
   */
  name?: string;
  /**
   * The customer's phone number after a completed Checkout Session.
   */
  phone?: string;
  /**
   * The customer’s tax exempt status after a completed Checkout Session.
   */
  taxExempt?: string;
  /**
   * The customer’s tax IDs after a completed Checkout Session.
   */
  taxIds?: Array<PaymentPagesCheckoutSessionTaxId>;
}

export const PaymentPagesCheckoutSessionCustomerDetailsSchema: TypedSchema<PaymentPagesCheckoutSessionCustomerDetails> = typed<PaymentPagesCheckoutSessionCustomerDetails>(object({
  get address() { return optional(AddressSchema) },
  businessName: optional(string()),
  email: optional(string()),
  individualName: optional(string()),
  name: optional(string()),
  phone: optional(string()),
  taxExempt: optional(string()),
  get taxIds() { return optional(array(PaymentPagesCheckoutSessionTaxIdSchema)) },
}));