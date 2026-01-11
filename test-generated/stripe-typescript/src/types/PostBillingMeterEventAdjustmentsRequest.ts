import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingMeterEventAdjustmentsRequestCancel } from './PostBillingMeterEventAdjustmentsRequestCancel';
import { PostBillingMeterEventAdjustmentsRequestCancelSchema } from './PostBillingMeterEventAdjustmentsRequestCancel';
export interface PostBillingMeterEventAdjustmentsRequest {
  /**
   * event_adjustment_cancel_settings_param
   *
   * Specifies which event to cancel.
   */
  cancel?: PostBillingMeterEventAdjustmentsRequestCancel;
  /**
   * The name of the meter event. Corresponds with the `event_name` field on a meter.
   */
  eventName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
   */
  type: string;
}

export const PostBillingMeterEventAdjustmentsRequestSchema: TypedSchema<PostBillingMeterEventAdjustmentsRequest> = typed<PostBillingMeterEventAdjustmentsRequest>(object({
  get cancel() { return optional(PostBillingMeterEventAdjustmentsRequestCancelSchema) },
  eventName: string(),
  expand: optional(array(string())),
  type: string(),
}));