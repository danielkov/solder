import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { KlarnaAddress } from './KlarnaAddress';
import { KlarnaAddressSchema } from './KlarnaAddress';
/**
 * klarna_payer_details
 *
 * 
 */
export interface KlarnaPayerDetails {
  /**
   * The payer's address
   */
  address?: KlarnaAddress;
}

export const KlarnaPayerDetailsSchema: TypedSchema<KlarnaPayerDetails> = typed<KlarnaPayerDetails>(object({
  get address() { return optional(KlarnaAddressSchema) },
}));