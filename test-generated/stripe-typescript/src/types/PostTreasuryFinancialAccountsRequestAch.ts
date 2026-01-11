import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * access_with_ach_details
 */
export interface PostTreasuryFinancialAccountsRequestAch {
  requested: boolean;
}

export const PostTreasuryFinancialAccountsRequestAchSchema: TypedSchema<PostTreasuryFinancialAccountsRequestAch> = typed<PostTreasuryFinancialAccountsRequestAch>(object({
  requested: boolean(),
}));