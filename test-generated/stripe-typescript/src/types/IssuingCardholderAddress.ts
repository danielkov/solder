import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * IssuingCardholderAddress
 *
 * 
 */
export interface IssuingCardholderAddress {
  /**
   * Address
   *
   * 
   */
  address: Address;
}

export const IssuingCardholderAddressSchema: TypedSchema<IssuingCardholderAddress> = typed<IssuingCardholderAddress>(object({
  address: AddressSchema,
}));