import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesRequestDefaultTaxRates = Array<string> | string;

export const PostQuotesRequestDefaultTaxRatesSchema: TypedSchema<PostQuotesRequestDefaultTaxRates> = typed<PostQuotesRequestDefaultTaxRates>(union(array(string()), string()));