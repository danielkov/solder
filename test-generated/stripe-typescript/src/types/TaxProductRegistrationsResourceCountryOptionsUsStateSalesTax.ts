import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection } from './TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection';
import { TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElectionSchema } from './TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection';
/**
 * TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax {
  /**
   * Elections for the state sales tax registration.
   */
  elections?: Array<TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection>;
}

export const TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax> = typed<TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax>(object({
  get elections() { return optional(array(TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElectionSchema)) },
}));