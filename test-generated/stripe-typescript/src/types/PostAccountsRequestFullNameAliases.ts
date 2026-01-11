import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostAccountsRequestFullNameAliases = Array<string> | string;

export const PostAccountsRequestFullNameAliasesSchema: TypedSchema<PostAccountsRequestFullNameAliases> = typed<PostAccountsRequestFullNameAliases>(union(array(string()), string()));