import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostTreasuryFinancialAccountsRequestNickname = string | string;

export const PostTreasuryFinancialAccountsRequestNicknameSchema: TypedSchema<PostTreasuryFinancialAccountsRequestNickname> = typed<PostTreasuryFinancialAccountsRequestNickname>(union(string(), string()));