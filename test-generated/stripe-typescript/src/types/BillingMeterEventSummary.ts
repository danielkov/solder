import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingMeterEventSummary
 *
 * A billing meter event summary represents an aggregated view of a customer's billing meter events within a specified timeframe. It indicates how much
usage was accrued by a customer for that period.

Note: Meters events are aggregated asynchronously so the meter event summaries provide an eventually consistent view of the reported usage.
 */
export interface BillingMeterEventSummary {
  /**
   * Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). The aggregation strategy is defined on meter via `default_aggregation`.
   */
  aggregatedValue: number;
  /**
   * End timestamp for this event summary (exclusive). Must be aligned with minute boundaries.
   */
  endTime: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The meter associated with this event summary.
   */
  meter: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Start timestamp for this event summary (inclusive). Must be aligned with minute boundaries.
   */
  startTime: number;
}

export const BillingMeterEventSummarySchema: TypedSchema<BillingMeterEventSummary> = typed<BillingMeterEventSummary>(object({
  aggregatedValue: number(),
  endTime: number(),
  id: string(),
  livemode: boolean(),
  meter: string(),
  object: string(),
  startTime: number(),
}));