import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item. Pass an empty string to remove previously-defined tax rates.
 */
export type PostInvoiceitemsInvoiceitemRequestTaxRates = Array<string> | string;

export const PostInvoiceitemsInvoiceitemRequestTaxRatesSchema: TypedSchema<PostInvoiceitemsInvoiceitemRequestTaxRates> = typed<PostInvoiceitemsInvoiceitemRequestTaxRates>(union(array(string()), string()));
