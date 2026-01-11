import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesInvoiceRequestDefaultSource = string | string;

export const PostInvoicesInvoiceRequestDefaultSourceSchema: TypedSchema<PostInvoicesInvoiceRequestDefaultSource> = typed<PostInvoicesInvoiceRequestDefaultSource>(union(string(), string()));