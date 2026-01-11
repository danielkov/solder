import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductRegistrationsResourceCountryOptionsEuStandard } from './TaxProductRegistrationsResourceCountryOptionsEuStandard';
import { TaxProductRegistrationsResourceCountryOptionsEuStandardSchema } from './TaxProductRegistrationsResourceCountryOptionsEuStandard';
/**
 * TaxProductRegistrationsResourceCountryOptionsEurope
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsEurope {
  /**
   * TaxProductRegistrationsResourceCountryOptionsEuStandard
   *
   * 
   */
  standard?: TaxProductRegistrationsResourceCountryOptionsEuStandard;
  /**
   * Type of registration in an EU country.
   */
  type: string;
}

export const TaxProductRegistrationsResourceCountryOptionsEuropeSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsEurope> = typed<TaxProductRegistrationsResourceCountryOptionsEurope>(object({
  get standard() { return optional(TaxProductRegistrationsResourceCountryOptionsEuStandardSchema) },
  type: string(),
}));