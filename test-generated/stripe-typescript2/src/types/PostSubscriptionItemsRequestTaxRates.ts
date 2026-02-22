import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
 */
export type PostSubscriptionItemsRequestTaxRates = Array<string> | string;

export const PostSubscriptionItemsRequestTaxRatesSchema: TypedSchema<PostSubscriptionItemsRequestTaxRates> = typed<PostSubscriptionItemsRequestTaxRates>(union(array(string()), string()));
