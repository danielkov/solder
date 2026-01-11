import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { TreasuryFinancialAccountsResourceOutboundAchToggleSettings } from './TreasuryFinancialAccountsResourceOutboundAchToggleSettings';
import { TreasuryFinancialAccountsResourceOutboundAchToggleSettingsSchema } from './TreasuryFinancialAccountsResourceOutboundAchToggleSettings';
import type { TreasuryFinancialAccountsResourceToggleSettings } from './TreasuryFinancialAccountsResourceToggleSettings';
import { TreasuryFinancialAccountsResourceToggleSettingsSchema } from './TreasuryFinancialAccountsResourceToggleSettings';
/**
 * TreasuryFinancialAccountsResourceOutboundTransfers
 *
 * OutboundTransfers contains outbound transfers features for a FinancialAccount.
 */
export interface TreasuryFinancialAccountsResourceOutboundTransfers {
  /**
   * TreasuryFinancialAccountsResourceOutboundAchToggleSettings
   *
   * Toggle settings for enabling/disabling an outbound ACH specific feature
   */
  ach?: TreasuryFinancialAccountsResourceOutboundAchToggleSettings;
  /**
   * TreasuryFinancialAccountsResourceToggleSettings
   *
   * Toggle settings for enabling/disabling a feature
   */
  usDomesticWire?: TreasuryFinancialAccountsResourceToggleSettings;
}

export const TreasuryFinancialAccountsResourceOutboundTransfersSchema: TypedSchema<TreasuryFinancialAccountsResourceOutboundTransfers> = typed<TreasuryFinancialAccountsResourceOutboundTransfers>(object({
  get ach() { return optional(TreasuryFinancialAccountsResourceOutboundAchToggleSettingsSchema) },
  get usDomesticWire() { return optional(TreasuryFinancialAccountsResourceToggleSettingsSchema) },
}));