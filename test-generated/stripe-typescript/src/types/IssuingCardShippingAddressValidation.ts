import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * IssuingCardShippingAddressValidation
 *
 * 
 */
export interface IssuingCardShippingAddressValidation {
  /**
   * The address validation capabilities to use.
   */
  mode: string;
  /**
   * The normalized shipping address.
   */
  normalizedAddress?: Address;
  /**
   * The validation result for the shipping address.
   */
  result?: string;
}

export const IssuingCardShippingAddressValidationSchema: TypedSchema<IssuingCardShippingAddressValidation> = typed<IssuingCardShippingAddressValidation>(object({
  mode: string(),
  get normalizedAddress() { return optional(AddressSchema) },
  result: optional(string()),
}));