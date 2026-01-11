import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MeterOrRef } from './MeterOrRef';
import { MeterOrRefSchema } from './MeterOrRef';
import type { ThresholdsResourceUsageAlertFilter } from './ThresholdsResourceUsageAlertFilter';
import { ThresholdsResourceUsageAlertFilterSchema } from './ThresholdsResourceUsageAlertFilter';
/**
 * ThresholdsResourceUsageThresholdConfig
 *
 * The usage threshold alert configuration enables setting up alerts for when a certain usage threshold on a specific meter is crossed.
 */
export interface ThresholdsResourceUsageThresholdConfig {
  /**
   * The filters allow limiting the scope of this usage alert. You can only specify up to one filter at this time.
   */
  filters?: Array<ThresholdsResourceUsageAlertFilter>;
  /**
   * The value at which this alert will trigger.
   */
  gte: number;
  /**
   * The [Billing Meter](/api/billing/meter) ID whose usage is monitored.
   */
  meter: MeterOrRef;
  /**
   * Defines how the alert will behave.
   */
  recurrence: string;
}

export const ThresholdsResourceUsageThresholdConfigSchema: TypedSchema<ThresholdsResourceUsageThresholdConfig> = typed<ThresholdsResourceUsageThresholdConfig>(object({
  get filters() { return optional(array(ThresholdsResourceUsageAlertFilterSchema)) },
  gte: number(),
  meter: MeterOrRefSchema,
  recurrence: string(),
}));