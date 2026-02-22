import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
 */
export type PostInvoicesRequestAccountTaxIds = Array<string> | string;

export const PostInvoicesRequestAccountTaxIdsSchema: TypedSchema<PostInvoicesRequestAccountTaxIds> = typed<PostInvoicesRequestAccountTaxIds>(union(array(string()), string()));
