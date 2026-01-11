import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * ConfirmationTokensResourceShipping
 *
 * 
 */
export interface ConfirmationTokensResourceShipping {
  /**
   * Address
   *
   * 
   */
  address: Address;
  /**
   * Recipient name.
   */
  name: string;
  /**
   * Recipient phone (including extension).
   */
  phone?: string;
}

export const ConfirmationTokensResourceShippingSchema: TypedSchema<ConfirmationTokensResourceShipping> = typed<ConfirmationTokensResourceShipping>(object({
  address: AddressSchema,
  name: string(),
  phone: optional(string()),
}));