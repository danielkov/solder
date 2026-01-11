import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings } from './PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings';
import { PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettingsSchema } from './PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings';
export interface PostTreasuryFinancialAccountsFinancialAccountCloseRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * forwarding_settings
   *
   * A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0
   */
  forwardingSettings?: PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings;
}

export const PostTreasuryFinancialAccountsFinancialAccountCloseRequestSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountCloseRequest> = typed<PostTreasuryFinancialAccountsFinancialAccountCloseRequest>(object({
  expand: optional(array(string())),
  get forwardingSettings() { return optional(PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettingsSchema) },
}));