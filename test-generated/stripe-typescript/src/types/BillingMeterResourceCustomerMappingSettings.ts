import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingMeterResourceCustomerMappingSettings
 *
 * 
 */
export interface BillingMeterResourceCustomerMappingSettings {
  /**
   * The key in the meter event payload to use for mapping the event to a customer.
   */
  eventPayloadKey: string;
  /**
   * The method for mapping a meter event to a customer.
   */
  type: string;
}

export const BillingMeterResourceCustomerMappingSettingsSchema: TypedSchema<BillingMeterResourceCustomerMappingSettings> = typed<BillingMeterResourceCustomerMappingSettings>(object({
  eventPayloadKey: string(),
  type: string(),
}));