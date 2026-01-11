import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * SubscriptionsResourceBillingCycleAnchorConfig
 *
 * 
 */
export interface SubscriptionsResourceBillingCycleAnchorConfig {
  /**
   * The day of the month of the billing_cycle_anchor.
   */
  dayOfMonth: number;
  /**
   * The hour of the day of the billing_cycle_anchor.
   */
  hour?: number;
  /**
   * The minute of the hour of the billing_cycle_anchor.
   */
  minute?: number;
  /**
   * The month to start full cycle billing periods.
   */
  month?: number;
  /**
   * The second of the minute of the billing_cycle_anchor.
   */
  second?: number;
}

export const SubscriptionsResourceBillingCycleAnchorConfigSchema: TypedSchema<SubscriptionsResourceBillingCycleAnchorConfig> = typed<SubscriptionsResourceBillingCycleAnchorConfig>(object({
  dayOfMonth: number(),
  hour: optional(number()),
  minute: optional(number()),
  month: optional(number()),
  second: optional(number()),
}));