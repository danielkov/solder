import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. This will always overwrite any trials that might apply via a subscribed plan. If set, `trial_end` will override the default trial period of the plan the customer is being subscribed to. The `billing_cycle_anchor` will be updated to the `trial_end` value. The special value `now` can be provided to end the customer's trial immediately. Can be at most two years from `billing_cycle_anchor`.
 */
export type PostSubscriptionsSubscriptionExposedIdRequestTrialEnd = string | number;

export const PostSubscriptionsSubscriptionExposedIdRequestTrialEndSchema: TypedSchema<PostSubscriptionsSubscriptionExposedIdRequestTrialEnd> = typed<PostSubscriptionsSubscriptionExposedIdRequestTrialEnd>(union(string(), number()));
