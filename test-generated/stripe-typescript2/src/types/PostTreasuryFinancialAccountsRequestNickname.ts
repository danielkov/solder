import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The nickname for the FinancialAccount.
 */
export type PostTreasuryFinancialAccountsRequestNickname = string | string;

export const PostTreasuryFinancialAccountsRequestNicknameSchema: TypedSchema<PostTreasuryFinancialAccountsRequestNickname> = typed<PostTreasuryFinancialAccountsRequestNickname>(union(string(), string()));
