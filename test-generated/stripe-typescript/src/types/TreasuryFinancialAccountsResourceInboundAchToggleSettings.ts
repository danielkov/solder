import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryFinancialAccountsResourceTogglesSettingStatusDetails } from './TreasuryFinancialAccountsResourceTogglesSettingStatusDetails';
import { TreasuryFinancialAccountsResourceTogglesSettingStatusDetailsSchema } from './TreasuryFinancialAccountsResourceTogglesSettingStatusDetails';
/**
 * TreasuryFinancialAccountsResourceInboundAchToggleSettings
 *
 * Toggle settings for enabling/disabling an inbound ACH specific feature
 */
export interface TreasuryFinancialAccountsResourceInboundAchToggleSettings {
  /**
   * Whether the FinancialAccount should have the Feature.
   */
  requested: boolean;
  /**
   * Whether the Feature is operational.
   */
  status: string;
  /**
   * Additional details; includes at least one entry when the status is not `active`.
   */
  statusDetails: Array<TreasuryFinancialAccountsResourceTogglesSettingStatusDetails>;
}

export const TreasuryFinancialAccountsResourceInboundAchToggleSettingsSchema: TypedSchema<TreasuryFinancialAccountsResourceInboundAchToggleSettings> = typed<TreasuryFinancialAccountsResourceInboundAchToggleSettings>(object({
  requested: boolean(),
  status: string(),
  statusDetails: array(TreasuryFinancialAccountsResourceTogglesSettingStatusDetailsSchema),
}));