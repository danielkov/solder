import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * access
 *
 * Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment).
 */
export interface PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlows {
  requested: boolean;
}

export const PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlowsSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlows> = typed<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestIntraStripeFlows>(object({
  requested: boolean(),
}));