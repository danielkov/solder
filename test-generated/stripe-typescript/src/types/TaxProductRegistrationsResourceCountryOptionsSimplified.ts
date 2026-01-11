import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductRegistrationsResourceCountryOptionsSimplified
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsSimplified {
  /**
   * Type of registration in `country`.
   */
  type: string;
}

export const TaxProductRegistrationsResourceCountryOptionsSimplifiedSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsSimplified> = typed<TaxProductRegistrationsResourceCountryOptionsSimplified>(object({
  type: string(),
}));