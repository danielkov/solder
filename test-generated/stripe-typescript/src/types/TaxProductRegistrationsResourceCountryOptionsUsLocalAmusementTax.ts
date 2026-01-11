import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax {
  /**
   * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
   */
  jurisdiction: string;
}

export const TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTaxSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax> = typed<TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax>(object({
  jurisdiction: string(),
}));