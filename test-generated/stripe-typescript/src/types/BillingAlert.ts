import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ThresholdsResourceUsageThresholdConfig } from './ThresholdsResourceUsageThresholdConfig';
import { ThresholdsResourceUsageThresholdConfigSchema } from './ThresholdsResourceUsageThresholdConfig';
/**
 * ThresholdsResourceAlert
 *
 * A billing alert is a resource that notifies you when a certain usage threshold on a meter is crossed. For example, you might create a billing alert to notify you when a certain user made 100 API requests.
 */
export interface BillingAlert {
  /**
   * Defines the type of the alert.
   */
  alertType: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Status of the alert. This can be active, inactive or archived.
   */
  status?: string;
  /**
   * Title of the alert.
   */
  title: string;
  /**
   * Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://stripe.com/docs/api/billing/meter).
   */
  usageThreshold?: ThresholdsResourceUsageThresholdConfig;
}

export const BillingAlertSchema: TypedSchema<BillingAlert> = typed<BillingAlert>(object({
  alertType: string(),
  id: string(),
  livemode: boolean(),
  object: string(),
  status: optional(string()),
  title: string(),
  get usageThreshold() { return optional(ThresholdsResourceUsageThresholdConfigSchema) },
}));