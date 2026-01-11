import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductRegistrationsResourceCountryOptionsDefault
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsDefault {
  /**
   * Type of registration in `country`.
   */
  type: string;
}

export const TaxProductRegistrationsResourceCountryOptionsDefaultSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsDefault> = typed<TaxProductRegistrationsResourceCountryOptionsDefault>(object({
  type: string(),
}));