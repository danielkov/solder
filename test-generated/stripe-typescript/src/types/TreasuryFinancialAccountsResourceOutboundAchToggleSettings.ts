import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryFinancialAccountsResourceTogglesSettingStatusDetails } from './TreasuryFinancialAccountsResourceTogglesSettingStatusDetails';
import { TreasuryFinancialAccountsResourceTogglesSettingStatusDetailsSchema } from './TreasuryFinancialAccountsResourceTogglesSettingStatusDetails';
/**
 * TreasuryFinancialAccountsResourceOutboundAchToggleSettings
 *
 * Toggle settings for enabling/disabling an outbound ACH specific feature
 */
export interface TreasuryFinancialAccountsResourceOutboundAchToggleSettings {
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

export const TreasuryFinancialAccountsResourceOutboundAchToggleSettingsSchema: TypedSchema<TreasuryFinancialAccountsResourceOutboundAchToggleSettings> = typed<TreasuryFinancialAccountsResourceOutboundAchToggleSettings>(object({
  requested: boolean(),
  status: string(),
  statusDetails: array(TreasuryFinancialAccountsResourceTogglesSettingStatusDetailsSchema),
}));