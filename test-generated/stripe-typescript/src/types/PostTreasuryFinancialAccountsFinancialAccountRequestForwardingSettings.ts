import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * forwarding_settings
 *
 * A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0
 */
export interface PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings {
  financialAccount?: string;
  paymentMethod?: string;
  type: string;
}

export const PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettingsSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings> = typed<PostTreasuryFinancialAccountsFinancialAccountRequestForwardingSettings>(object({
  financialAccount: optional(string()),
  paymentMethod: optional(string()),
  type: string(),
}));