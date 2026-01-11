import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax {
  /**
   * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
   */
  jurisdiction: string;
}

export const TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTaxSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax> = typed<TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax>(object({
  jurisdiction: string(),
}));