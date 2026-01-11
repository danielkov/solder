import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax } from './TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax';
import { TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTaxSchema } from './TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax';
import type { TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax } from './TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax';
import { TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTaxSchema } from './TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax';
import type { TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax } from './TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax';
import { TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxSchema } from './TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax';
/**
 * TaxProductRegistrationsResourceCountryOptionsUnitedStates
 *
 * 
 */
export interface TaxProductRegistrationsResourceCountryOptionsUnitedStates {
  /**
   * TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax
   *
   * 
   */
  localAmusementTax?: TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax;
  /**
   * TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax
   *
   * 
   */
  localLeaseTax?: TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax;
  /**
   * Two-letter US state code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
   */
  state: string;
  /**
   * TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax
   *
   * 
   */
  stateSalesTax?: TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax;
  /**
   * Type of registration in the US.
   */
  type: string;
}

export const TaxProductRegistrationsResourceCountryOptionsUnitedStatesSchema: TypedSchema<TaxProductRegistrationsResourceCountryOptionsUnitedStates> = typed<TaxProductRegistrationsResourceCountryOptionsUnitedStates>(object({
  get localAmusementTax() { return optional(TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTaxSchema) },
  get localLeaseTax() { return optional(TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTaxSchema) },
  state: string(),
  get stateSalesTax() { return optional(TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxSchema) },
  type: string(),
}));