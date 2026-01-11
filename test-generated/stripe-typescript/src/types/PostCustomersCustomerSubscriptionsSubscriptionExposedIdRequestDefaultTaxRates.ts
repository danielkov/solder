import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates = Array<string> | string;

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRatesSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates>(union(array(string()), string()));