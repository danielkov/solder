import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { TaxProductResourceTaxSettingsStatusDetailsResourceActive } from './TaxProductResourceTaxSettingsStatusDetailsResourceActive';
import { TaxProductResourceTaxSettingsStatusDetailsResourceActiveSchema } from './TaxProductResourceTaxSettingsStatusDetailsResourceActive';
import type { TaxProductResourceTaxSettingsStatusDetailsResourcePending } from './TaxProductResourceTaxSettingsStatusDetailsResourcePending';
import { TaxProductResourceTaxSettingsStatusDetailsResourcePendingSchema } from './TaxProductResourceTaxSettingsStatusDetailsResourcePending';
/**
 * TaxProductResourceTaxSettingsStatusDetails
 *
 * 
 */
export interface TaxProductResourceTaxSettingsStatusDetails {
  /**
   * TaxProductResourceTaxSettingsStatusDetailsResourceActive
   *
   * 
   */
  active?: TaxProductResourceTaxSettingsStatusDetailsResourceActive;
  /**
   * TaxProductResourceTaxSettingsStatusDetailsResourcePending
   *
   * 
   */
  pending?: TaxProductResourceTaxSettingsStatusDetailsResourcePending;
}

export const TaxProductResourceTaxSettingsStatusDetailsSchema: TypedSchema<TaxProductResourceTaxSettingsStatusDetails> = typed<TaxProductResourceTaxSettingsStatusDetails>(object({
  get active() { return optional(TaxProductResourceTaxSettingsStatusDetailsResourceActiveSchema) },
  get pending() { return optional(TaxProductResourceTaxSettingsStatusDetailsResourcePendingSchema) },
}));