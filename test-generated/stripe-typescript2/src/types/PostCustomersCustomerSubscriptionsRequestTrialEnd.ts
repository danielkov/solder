import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value `now` can be provided to end the customer's trial immediately. Can be at most two years from `billing_cycle_anchor`. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
 */
export type PostCustomersCustomerSubscriptionsRequestTrialEnd = string | number;

export const PostCustomersCustomerSubscriptionsRequestTrialEndSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestTrialEnd> = typed<PostCustomersCustomerSubscriptionsRequestTrialEnd>(union(string(), number()));
