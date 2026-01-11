import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * cycle_anchor_config_param
 *
 * Mutually exclusive with billing_cycle_anchor and only valid with monthly and yearly price intervals. When provided, the billing_cycle_anchor is set to the next occurrence of the day_of_month at the hour, minute, and second UTC.
 */
export interface PostSubscriptionsRequestBillingCycleAnchorConfig {
  dayOfMonth: number;
  hour?: number;
  minute?: number;
  month?: number;
  second?: number;
}

export const PostSubscriptionsRequestBillingCycleAnchorConfigSchema: TypedSchema<PostSubscriptionsRequestBillingCycleAnchorConfig> = typed<PostSubscriptionsRequestBillingCycleAnchorConfig>(object({
  dayOfMonth: number(),
  hour: optional(number()),
  minute: optional(number()),
  month: optional(number()),
  second: optional(number()),
}));