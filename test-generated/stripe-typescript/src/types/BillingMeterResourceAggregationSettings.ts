import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingMeterResourceAggregationSettings
 *
 * 
 */
export interface BillingMeterResourceAggregationSettings {
  /**
   * Specifies how events are aggregated.
   */
  formula: string;
}

export const BillingMeterResourceAggregationSettingsSchema: TypedSchema<BillingMeterResourceAggregationSettings> = typed<BillingMeterResourceAggregationSettings>(object({
  formula: string(),
}));