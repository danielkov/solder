import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The tax rates which apply to the line item. When set, the `default_tax_rates` on the invoice do not apply to this line item. Pass an empty string to remove previously-defined tax rates.
 */
export type PostInvoicesInvoiceLinesLineItemIdRequestTaxRates = Array<string> | string;

export const PostInvoicesInvoiceLinesLineItemIdRequestTaxRatesSchema: TypedSchema<PostInvoicesInvoiceLinesLineItemIdRequestTaxRates> = typed<PostInvoicesInvoiceLinesLineItemIdRequestTaxRates>(union(array(string()), string()));
