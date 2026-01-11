import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * TreasurySharedResourceBillingDetails
 *
 * 
 */
export interface TreasurySharedResourceBillingDetails {
  /**
   * Address
   *
   * 
   */
  address: Address;
  /**
   * Email address.
   */
  email?: string;
  /**
   * Full name.
   */
  name?: string;
}

export const TreasurySharedResourceBillingDetailsSchema: TypedSchema<TreasurySharedResourceBillingDetails> = typed<TreasurySharedResourceBillingDetails>(object({
  address: AddressSchema,
  email: optional(string()),
  name: optional(string()),
}));