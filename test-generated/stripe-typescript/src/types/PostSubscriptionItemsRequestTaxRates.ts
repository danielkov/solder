import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostSubscriptionItemsRequestTaxRates = Array<string> | string;

export const PostSubscriptionItemsRequestTaxRatesSchema: TypedSchema<PostSubscriptionItemsRequestTaxRates> = typed<PostSubscriptionItemsRequestTaxRates>(union(array(string()), string()));