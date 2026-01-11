import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostAccountsAccountRequestDefaultAccountTaxIds = Array<string> | string;

export const PostAccountsAccountRequestDefaultAccountTaxIdsSchema: TypedSchema<PostAccountsAccountRequestDefaultAccountTaxIds> = typed<PostAccountsAccountRequestDefaultAccountTaxIds>(union(array(string()), string()));