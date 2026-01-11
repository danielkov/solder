import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostAccountsAccountPeopleRequestFullNameAliases = Array<string> | string;

export const PostAccountsAccountPeopleRequestFullNameAliasesSchema: TypedSchema<PostAccountsAccountPeopleRequestFullNameAliases> = typed<PostAccountsAccountPeopleRequestFullNameAliases>(union(array(string()), string()));