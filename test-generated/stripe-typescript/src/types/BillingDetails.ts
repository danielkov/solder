import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * billing_details
 *
 * 
 */
export interface BillingDetails {
  /**
   * Billing address.
   */
  address?: Address;
  /**
   * Email address.
   */
  email?: string;
  /**
   * Full name.
   */
  name?: string;
  /**
   * Billing phone number (including extension).
   */
  phone?: string;
  /**
   * Taxpayer identification number. Used only for transactions between LATAM buyers and non-LATAM sellers.
   */
  taxId?: string;
}

export const BillingDetailsSchema: TypedSchema<BillingDetails> = typed<BillingDetails>(object({
  get address() { return optional(AddressSchema) },
  email: optional(string()),
  name: optional(string()),
  phone: optional(string()),
  taxId: optional(string()),
}));