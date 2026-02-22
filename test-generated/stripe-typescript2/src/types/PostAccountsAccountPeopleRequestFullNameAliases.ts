import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A list of alternate names or aliases that the person is known by.
 */
export type PostAccountsAccountPeopleRequestFullNameAliases = Array<string> | string;

export const PostAccountsAccountPeopleRequestFullNameAliasesSchema: TypedSchema<PostAccountsAccountPeopleRequestFullNameAliases> = typed<PostAccountsAccountPeopleRequestFullNameAliases>(union(array(string()), string()));
