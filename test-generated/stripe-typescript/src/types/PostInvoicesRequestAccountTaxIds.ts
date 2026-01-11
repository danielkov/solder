import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesRequestAccountTaxIds = Array<string> | string;

export const PostInvoicesRequestAccountTaxIdsSchema: TypedSchema<PostInvoicesRequestAccountTaxIds> = typed<PostInvoicesRequestAccountTaxIds>(union(array(string()), string()));