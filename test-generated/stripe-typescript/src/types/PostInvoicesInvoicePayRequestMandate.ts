import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesInvoicePayRequestMandate = string | string;

export const PostInvoicesInvoicePayRequestMandateSchema: TypedSchema<PostInvoicesInvoicePayRequestMandate> = typed<PostInvoicesInvoicePayRequestMandate>(union(string(), string()));