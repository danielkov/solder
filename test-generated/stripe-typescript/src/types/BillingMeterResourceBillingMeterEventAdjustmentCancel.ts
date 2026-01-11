import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingMeterResourceBillingMeterEventAdjustmentCancel
 *
 * 
 */
export interface BillingMeterResourceBillingMeterEventAdjustmentCancel {
  /**
   * Unique identifier for the event.
   */
  identifier?: string;
}

export const BillingMeterResourceBillingMeterEventAdjustmentCancelSchema: TypedSchema<BillingMeterResourceBillingMeterEventAdjustmentCancel> = typed<BillingMeterResourceBillingMeterEventAdjustmentCancel>(object({
  identifier: optional(string()),
}));