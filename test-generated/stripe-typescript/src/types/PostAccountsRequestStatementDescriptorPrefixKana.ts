import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostAccountsRequestStatementDescriptorPrefixKana = string | string;

export const PostAccountsRequestStatementDescriptorPrefixKanaSchema: TypedSchema<PostAccountsRequestStatementDescriptorPrefixKana> = typed<PostAccountsRequestStatementDescriptorPrefixKana>(union(string(), string()));