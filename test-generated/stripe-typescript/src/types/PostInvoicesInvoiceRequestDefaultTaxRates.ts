import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesInvoiceRequestDefaultTaxRates = Array<string> | string;

export const PostInvoicesInvoiceRequestDefaultTaxRatesSchema: TypedSchema<PostInvoicesInvoiceRequestDefaultTaxRates> = typed<PostInvoicesInvoiceRequestDefaultTaxRates>(union(array(string()), string()));