import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * SourceOwner
 *
 * 
 */
export interface SourceOwner {
  /**
   * Owner's address.
   */
  address?: Address;
  /**
   * Owner's email address.
   */
  email?: string;
  /**
   * Owner's full name.
   */
  name?: string;
  /**
   * Owner's phone number (including extension).
   */
  phone?: string;
  /**
   * Verified owner's address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verifiedAddress?: Address;
  /**
   * Verified owner's email address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verifiedEmail?: string;
  /**
   * Verified owner's full name. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verifiedName?: string;
  /**
   * Verified owner's phone number (including extension). Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verifiedPhone?: string;
}

export const SourceOwnerSchema: TypedSchema<SourceOwner> = typed<SourceOwner>(object({
  get address() { return optional(AddressSchema) },
  email: optional(string()),
  name: optional(string()),
  phone: optional(string()),
  get verifiedAddress() { return optional(AddressSchema) },
  verifiedEmail: optional(string()),
  verifiedName: optional(string()),
  verifiedPhone: optional(string()),
}));