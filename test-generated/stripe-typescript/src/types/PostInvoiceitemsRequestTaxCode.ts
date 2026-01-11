import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoiceitemsRequestTaxCode = string | string;

export const PostInvoiceitemsRequestTaxCodeSchema: TypedSchema<PostInvoiceitemsRequestTaxCode> = typed<PostInvoiceitemsRequestTaxCode>(union(string(), string()));