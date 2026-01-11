import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductRegistrationsResourceCountryOptionsThailand
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsThailand {
  /**
   * Type of registration in `country`.
   */
  type: string;
}

export const TaxProductRegistrationsResourceCountryOptionsThailandSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsThailand> = typed<TaxProductRegistrationsResourceCountryOptionsThailand>(object({
  type: string(),
}));