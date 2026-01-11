import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostCustomersCustomerSubscriptionsRequestDefaultTaxRates = Array<string> | string;

export const PostCustomersCustomerSubscriptionsRequestDefaultTaxRatesSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestDefaultTaxRates> = typed<PostCustomersCustomerSubscriptionsRequestDefaultTaxRates>(union(array(string()), string()));