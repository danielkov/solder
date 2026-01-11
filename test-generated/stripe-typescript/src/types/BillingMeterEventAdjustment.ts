import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingMeterResourceBillingMeterEventAdjustmentCancel } from './BillingMeterResourceBillingMeterEventAdjustmentCancel';
import { BillingMeterResourceBillingMeterEventAdjustmentCancelSchema } from './BillingMeterResourceBillingMeterEventAdjustmentCancel';
/**
 * BillingMeterEventAdjustment
 *
 * A billing meter event adjustment is a resource that allows you to cancel a meter event. For example, you might create a billing meter event adjustment to cancel a meter event that was created in error or attached to the wrong customer.
 */
export interface BillingMeterEventAdjustment {
  /**
   * Specifies which event to cancel.
   */
  cancel?: BillingMeterResourceBillingMeterEventAdjustmentCancel;
  /**
   * The name of the meter event. Corresponds with the `event_name` field on a meter.
   */
  eventName: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The meter event adjustment's status.
   */
  status: string;
  /**
   * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
   */
  type: string;
}

export const BillingMeterEventAdjustmentSchema: TypedSchema<BillingMeterEventAdjustment> = typed<BillingMeterEventAdjustment>(object({
  get cancel() { return optional(BillingMeterResourceBillingMeterEventAdjustmentCancelSchema) },
  eventName: string(),
  livemode: boolean(),
  object: string(),
  status: string(),
  type: string(),
}));