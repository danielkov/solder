import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { TreasuryFinancialAccountsResourceInboundAchToggleSettings } from './TreasuryFinancialAccountsResourceInboundAchToggleSettings';
import { TreasuryFinancialAccountsResourceInboundAchToggleSettingsSchema } from './TreasuryFinancialAccountsResourceInboundAchToggleSettings';
/**
 * TreasuryFinancialAccountsResourceInboundTransfers
 *
 * InboundTransfers contains inbound transfers features for a FinancialAccount.
 */
export interface TreasuryFinancialAccountsResourceInboundTransfers {
  /**
   * TreasuryFinancialAccountsResourceInboundAchToggleSettings
   *
   * Toggle settings for enabling/disabling an inbound ACH specific feature
   */
  ach?: TreasuryFinancialAccountsResourceInboundAchToggleSettings;
}

export const TreasuryFinancialAccountsResourceInboundTransfersSchema: TypedSchema<TreasuryFinancialAccountsResourceInboundTransfers> = typed<TreasuryFinancialAccountsResourceInboundTransfers>(object({
  get ach() { return optional(TreasuryFinancialAccountsResourceInboundAchToggleSettingsSchema) },
}));