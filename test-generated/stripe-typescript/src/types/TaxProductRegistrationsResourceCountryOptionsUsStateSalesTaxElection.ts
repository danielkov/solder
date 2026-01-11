import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection {
  /**
   * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
   */
  jurisdiction?: string;
  /**
   * The type of the election for the state sales tax registration.
   */
  type: string;
}

export const TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElectionSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection> = typed<TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection>(object({
  jurisdiction: optional(string()),
  type: string(),
}));