import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CustomerOrRef } from './CustomerOrRef';
import { CustomerOrRefSchema } from './CustomerOrRef';
/**
 * ThresholdsResourceUsageAlertFilter
 *
 * 
 */
export interface ThresholdsResourceUsageAlertFilter {
  /**
   * Limit the scope of the alert to this customer ID
   */
  customer?: CustomerOrRef;
  type: string;
}

export const ThresholdsResourceUsageAlertFilterSchema: TypedSchema<ThresholdsResourceUsageAlertFilter> = typed<ThresholdsResourceUsageAlertFilter>(object({
  get customer() { return optional(CustomerOrRefSchema) },
  type: string(),
}));