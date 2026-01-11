import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * access
 *
 * Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount.
 */
export interface PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuing {
  requested: boolean;
}

export const PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuingSchema: TypedSchema<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuing> = typed<PostTreasuryFinancialAccountsFinancialAccountFeaturesRequestCardIssuing>(object({
  requested: boolean(),
}));