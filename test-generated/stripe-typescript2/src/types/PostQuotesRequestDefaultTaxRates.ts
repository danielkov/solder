import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The tax rates that will apply to any line item that does not have `tax_rates` set.
 */
export type PostQuotesRequestDefaultTaxRates = Array<string> | string;

export const PostQuotesRequestDefaultTaxRatesSchema: TypedSchema<PostQuotesRequestDefaultTaxRates> = typed<PostQuotesRequestDefaultTaxRates>(union(array(string()), string()));
