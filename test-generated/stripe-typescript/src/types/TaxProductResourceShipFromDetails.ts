import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { TaxProductResourcePostalAddress } from './TaxProductResourcePostalAddress';
import { TaxProductResourcePostalAddressSchema } from './TaxProductResourcePostalAddress';
/**
 * TaxProductResourceShipFromDetails
 *
 * 
 */
export interface TaxProductResourceShipFromDetails {
  /**
   * TaxProductResourcePostalAddress
   *
   * 
   */
  address: TaxProductResourcePostalAddress;
}

export const TaxProductResourceShipFromDetailsSchema: TypedSchema<TaxProductResourceShipFromDetails> = typed<TaxProductResourceShipFromDetails>(object({
  address: TaxProductResourcePostalAddressSchema,
}));