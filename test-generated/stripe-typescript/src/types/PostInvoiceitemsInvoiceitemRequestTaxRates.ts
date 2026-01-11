import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoiceitemsInvoiceitemRequestTaxRates = Array<string> | string;

export const PostInvoiceitemsInvoiceitemRequestTaxRatesSchema: TypedSchema<PostInvoiceitemsInvoiceitemRequestTaxRates> = typed<PostInvoiceitemsInvoiceitemRequestTaxRates>(union(array(string()), string()));