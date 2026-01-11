import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * event_adjustment_cancel_settings_param
 *
 * Specifies which event to cancel.
 */
export interface PostBillingMeterEventAdjustmentsRequestCancel {
  identifier?: string;
}

export const PostBillingMeterEventAdjustmentsRequestCancelSchema: TypedSchema<PostBillingMeterEventAdjustmentsRequestCancel> = typed<PostBillingMeterEventAdjustmentsRequestCancel>(object({
  identifier: optional(string()),
}));