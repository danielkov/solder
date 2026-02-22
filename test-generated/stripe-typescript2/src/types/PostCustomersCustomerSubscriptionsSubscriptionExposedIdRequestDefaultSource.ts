import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
 */
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource = string | string;

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSourceSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource>(union(string(), string()));
