import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard {
  /**
   * Two-letter CA province code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
   */
  province: string;
}

export const TaxProductRegistrationsResourceCountryOptionsCaProvinceStandardSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard> = typed<TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard>(object({
  province: string(),
}));