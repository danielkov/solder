import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostInvoicesInvoiceLinesLineItemIdRequestTaxRates = Array<string> | string;

export const PostInvoicesInvoiceLinesLineItemIdRequestTaxRatesSchema: TypedSchema<PostInvoicesInvoiceLinesLineItemIdRequestTaxRates> = typed<PostInvoicesInvoiceLinesLineItemIdRequestTaxRates>(union(array(string()), string()));