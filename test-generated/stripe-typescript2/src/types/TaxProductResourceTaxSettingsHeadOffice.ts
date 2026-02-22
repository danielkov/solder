import { object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * TaxProductResourceTaxSettingsHeadOffice
 * 
 * 
 */
export interface TaxProductResourceTaxSettingsHeadOffice {
  /**
   * Address
   * 
   * 
   */
  address: Address;
}

export const TaxProductResourceTaxSettingsHeadOfficeSchema: TypedSchema<TaxProductResourceTaxSettingsHeadOffice> = typed<TaxProductResourceTaxSettingsHeadOffice>(object({ address: AddressSchema }));
