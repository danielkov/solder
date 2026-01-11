import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryFinancialAccountsResourceTogglesSettingStatusDetails
 *
 * Additional details on the FinancialAccount Features information.
 */
export interface TreasuryFinancialAccountsResourceTogglesSettingStatusDetails {
  /**
   * Represents the reason why the status is `pending` or `restricted`.
   */
  code: string;
  /**
   * Represents what the user should do, if anything, to activate the Feature.
   */
  resolution?: string;
  /**
   * The `platform_restrictions` that are restricting this Feature.
   */
  restriction?: string;
}

export const TreasuryFinancialAccountsResourceTogglesSettingStatusDetailsSchema: TypedSchema<TreasuryFinancialAccountsResourceTogglesSettingStatusDetails> = typed<TreasuryFinancialAccountsResourceTogglesSettingStatusDetails>(object({
  code: string(),
  resolution: optional(string()),
  restriction: optional(string()),
}));