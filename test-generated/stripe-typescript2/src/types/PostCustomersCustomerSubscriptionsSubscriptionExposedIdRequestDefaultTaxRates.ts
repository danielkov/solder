import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription. Pass an empty string to remove previously-defined tax rates.
 */
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates = Array<string> | string;

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRatesSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates>(union(array(string()), string()));
