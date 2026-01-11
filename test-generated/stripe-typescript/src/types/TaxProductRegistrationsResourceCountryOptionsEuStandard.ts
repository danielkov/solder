import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductRegistrationsResourceCountryOptionsEuStandard
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsEuStandard {
  /**
   * Place of supply scheme used in an EU standard registration.
   */
  placeOfSupplyScheme: string;
}

export const TaxProductRegistrationsResourceCountryOptionsEuStandardSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsEuStandard> = typed<TaxProductRegistrationsResourceCountryOptionsEuStandard>(object({
  placeOfSupplyScheme: string(),
}));