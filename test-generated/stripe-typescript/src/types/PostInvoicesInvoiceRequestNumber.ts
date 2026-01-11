import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesInvoiceRequestNumber = string | string;

export const PostInvoicesInvoiceRequestNumberSchema: TypedSchema<PostInvoicesInvoiceRequestNumber> = typed<PostInvoicesInvoiceRequestNumber>(union(string(), string()));