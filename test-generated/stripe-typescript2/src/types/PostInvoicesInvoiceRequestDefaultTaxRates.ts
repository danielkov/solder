import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The tax rates that will apply to any line item that does not have `tax_rates` set. Pass an empty string to remove previously-defined tax rates.
 */
export type PostInvoicesInvoiceRequestDefaultTaxRates = Array<string> | string;

export const PostInvoicesInvoiceRequestDefaultTaxRatesSchema: TypedSchema<PostInvoicesInvoiceRequestDefaultTaxRates> = typed<PostInvoicesInvoiceRequestDefaultTaxRates>(union(array(string()), string()));
