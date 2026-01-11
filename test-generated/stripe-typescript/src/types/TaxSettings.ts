import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductResourceTaxSettingsDefaults } from './TaxProductResourceTaxSettingsDefaults';
import { TaxProductResourceTaxSettingsDefaultsSchema } from './TaxProductResourceTaxSettingsDefaults';
import type { TaxProductResourceTaxSettingsHeadOffice } from './TaxProductResourceTaxSettingsHeadOffice';
import { TaxProductResourceTaxSettingsHeadOfficeSchema } from './TaxProductResourceTaxSettingsHeadOffice';
import type { TaxProductResourceTaxSettingsStatusDetails } from './TaxProductResourceTaxSettingsStatusDetails';
import { TaxProductResourceTaxSettingsStatusDetailsSchema } from './TaxProductResourceTaxSettingsStatusDetails';
/**
 * TaxProductResourceTaxSettings
 *
 * You can use Tax `Settings` to manage configurations used by Stripe Tax calculations.

Related guide: [Using the Settings API](https://stripe.com/docs/tax/settings-api)
 */
export interface TaxSettings {
  /**
   * TaxProductResourceTaxSettingsDefaults
   *
   * 
   */
  defaults: TaxProductResourceTaxSettingsDefaults;
  /**
   * The place where your business is located.
   */
  headOffice?: TaxProductResourceTaxSettingsHeadOffice;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The status of the Tax `Settings`.
   */
  status: string;
  /**
   * TaxProductResourceTaxSettingsStatusDetails
   *
   * 
   */
  statusDetails: TaxProductResourceTaxSettingsStatusDetails;
}

export const TaxSettingsSchema: TypedSchema<TaxSettings> = typed<TaxSettings>(object({
  defaults: TaxProductResourceTaxSettingsDefaultsSchema,
  get headOffice() { return optional(TaxProductResourceTaxSettingsHeadOfficeSchema) },
  livemode: boolean(),
  object: string(),
  status: string(),
  statusDetails: TaxProductResourceTaxSettingsStatusDetailsSchema,
}));