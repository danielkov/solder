import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
 */
export type PostCustomersCustomerSubscriptionsRequestApplicationFeePercent = number | string;

export const PostCustomersCustomerSubscriptionsRequestApplicationFeePercentSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestApplicationFeePercent> = typed<PostCustomersCustomerSubscriptionsRequestApplicationFeePercent>(union(number(), string()));
