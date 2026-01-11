import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard } from './TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard';
import { TaxProductRegistrationsResourceCountryOptionsCaProvinceStandardSchema } from './TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard';
/**
 * TaxProductRegistrationsResourceCountryOptionsCanada
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsCanada {
  /**
   * TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard
   *
   * 
   */
  provinceStandard?: TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard;
  /**
   * Type of registration in Canada.
   */
  type: string;
}

export const TaxProductRegistrationsResourceCountryOptionsCanadaSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsCanada> = typed<TaxProductRegistrationsResourceCountryOptionsCanada>(object({
  get provinceStandard() { return optional(TaxProductRegistrationsResourceCountryOptionsCaProvinceStandardSchema) },
  type: string(),
}));