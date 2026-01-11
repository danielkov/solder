import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * access
 */
export interface PostTreasuryFinancialAccountsRequestCardIssuing {
  requested: boolean;
}

export const PostTreasuryFinancialAccountsRequestCardIssuingSchema: TypedSchema<PostTreasuryFinancialAccountsRequestCardIssuing> = typed<PostTreasuryFinancialAccountsRequestCardIssuing>(object({
  requested: boolean(),
}));