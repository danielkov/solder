import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingMeterResourceBillingMeterValue
 *
 * 
 */
export interface BillingMeterResourceBillingMeterValue {
  /**
   * The key in the meter event payload to use as the value for this meter.
   */
  eventPayloadKey: string;
}

export const BillingMeterResourceBillingMeterValueSchema: TypedSchema<BillingMeterResourceBillingMeterValue> = typed<BillingMeterResourceBillingMeterValue>(object({
  eventPayloadKey: string(),
}));