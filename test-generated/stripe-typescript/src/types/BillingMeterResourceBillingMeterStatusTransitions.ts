import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * BillingMeterResourceBillingMeterStatusTransitions
 *
 * 
 */
export interface BillingMeterResourceBillingMeterStatusTransitions {
  /**
   * The time the meter was deactivated, if any. Measured in seconds since Unix epoch.
   */
  deactivatedAt?: number;
}

export const BillingMeterResourceBillingMeterStatusTransitionsSchema: TypedSchema<BillingMeterResourceBillingMeterStatusTransitions> = typed<BillingMeterResourceBillingMeterStatusTransitions>(object({
  deactivatedAt: optional(number()),
}));