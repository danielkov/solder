import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Recurring
 *
 * 
 */
export interface Recurring {
  /**
   * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
   */
  interval: string;
  /**
   * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
   */
  intervalCount: number;
  /**
   * The meter tracking the usage of a metered price
   */
  meter?: string;
  /**
   * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
   */
  usageType: string;
}

export const RecurringSchema: TypedSchema<Recurring> = typed<Recurring>(object({
  interval: string(),
  intervalCount: number(),
  meter: optional(string()),
  usageType: string(),
}));