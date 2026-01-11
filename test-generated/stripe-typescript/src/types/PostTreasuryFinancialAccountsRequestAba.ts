import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * aba_access
 */
export interface PostTreasuryFinancialAccountsRequestAba {
  requested: boolean;
}

export const PostTreasuryFinancialAccountsRequestAbaSchema: TypedSchema<PostTreasuryFinancialAccountsRequestAba> = typed<PostTreasuryFinancialAccountsRequestAba>(object({
  requested: boolean(),
}));