import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { TreasuryFinancialAccountsResourceOutboundAchToggleSettings } from './TreasuryFinancialAccountsResourceOutboundAchToggleSettings';
import { TreasuryFinancialAccountsResourceOutboundAchToggleSettingsSchema } from './TreasuryFinancialAccountsResourceOutboundAchToggleSettings';
import type { TreasuryFinancialAccountsResourceToggleSettings } from './TreasuryFinancialAccountsResourceToggleSettings';
import { TreasuryFinancialAccountsResourceToggleSettingsSchema } from './TreasuryFinancialAccountsResourceToggleSettings';
/**
 * TreasuryFinancialAccountsResourceOutboundPayments
 *
 * Settings related to Outbound Payments features on a Financial Account
 */
export interface TreasuryFinancialAccountsResourceOutboundPayments {
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

export const TreasuryFinancialAccountsResourceOutboundPaymentsSchema: TypedSchema<TreasuryFinancialAccountsResourceOutboundPayments> = typed<TreasuryFinancialAccountsResourceOutboundPayments>(object({
  get ach() { return optional(TreasuryFinancialAccountsResourceOutboundAchToggleSettingsSchema) },
  get usDomesticWire() { return optional(TreasuryFinancialAccountsResourceToggleSettingsSchema) },
}));