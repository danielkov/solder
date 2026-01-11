import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductRegistrationsResourceCountryOptionsDefaultStandard
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsDefaultStandard {
  /**
   * Place of supply scheme used in an Default standard registration.
   */
  placeOfSupplyScheme: string;
}

export const TaxProductRegistrationsResourceCountryOptionsDefaultStandardSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsDefaultStandard> = typed<TaxProductRegistrationsResourceCountryOptionsDefaultStandard>(object({
  placeOfSupplyScheme: string(),
}));