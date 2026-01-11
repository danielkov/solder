import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { TreasuryFinancialAccountsResourceAbaToggleSettings } from './TreasuryFinancialAccountsResourceAbaToggleSettings';
import { TreasuryFinancialAccountsResourceAbaToggleSettingsSchema } from './TreasuryFinancialAccountsResourceAbaToggleSettings';
/**
 * TreasuryFinancialAccountsResourceFinancialAddressesFeatures
 *
 * Settings related to Financial Addresses features on a Financial Account
 */
export interface TreasuryFinancialAccountsResourceFinancialAddressesFeatures {
  /**
   * TreasuryFinancialAccountsResourceAbaToggleSettings
   *
   * Toggle settings for enabling/disabling the ABA address feature
   */
  aba?: TreasuryFinancialAccountsResourceAbaToggleSettings;
}

export const TreasuryFinancialAccountsResourceFinancialAddressesFeaturesSchema: TypedSchema<TreasuryFinancialAccountsResourceFinancialAddressesFeatures> = typed<TreasuryFinancialAccountsResourceFinancialAddressesFeatures>(object({
  get aba() { return optional(TreasuryFinancialAccountsResourceAbaToggleSettingsSchema) },
}));