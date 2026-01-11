import { TypedSchema, array, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { SubscriptionItem } from './SubscriptionItem';
import { SubscriptionItemSchema } from './SubscriptionItem';
/**
 * SubscriptionsResourcePendingUpdate
 *
 * Pending Updates store the changes pending from a previous update that will be applied
to the Subscription upon successful payment.
 */
export interface SubscriptionsResourcePendingUpdate {
  /**
   * If the update is applied, determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
   */
  billingCycleAnchor?: number;
  /**
   * The point after which the changes reflected by this update will be discarded and no longer applied.
   */
  expiresAt: number;
  /**
   * List of subscription items, each with an attached plan, that will be set if the update is applied.
   */
  subscriptionItems?: Array<SubscriptionItem>;
  /**
   * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time, if the update is applied.
   */
  trialEnd?: number;
  /**
   * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
   */
  trialFromPlan?: boolean;
}

export const SubscriptionsResourcePendingUpdateSchema: TypedSchema<SubscriptionsResourcePendingUpdate> = typed<SubscriptionsResourcePendingUpdate>(object({
  billingCycleAnchor: optional(number()),
  expiresAt: number(),
  get subscriptionItems() { return optional(array(SubscriptionItemSchema)) },
  trialEnd: optional(number()),
  trialFromPlan: optional(boolean()),
}));