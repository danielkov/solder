import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingMeterResourceAggregationSettings } from './BillingMeterResourceAggregationSettings';
import { BillingMeterResourceAggregationSettingsSchema } from './BillingMeterResourceAggregationSettings';
import type { BillingMeterResourceBillingMeterStatusTransitions } from './BillingMeterResourceBillingMeterStatusTransitions';
import { BillingMeterResourceBillingMeterStatusTransitionsSchema } from './BillingMeterResourceBillingMeterStatusTransitions';
import type { BillingMeterResourceBillingMeterValue } from './BillingMeterResourceBillingMeterValue';
import { BillingMeterResourceBillingMeterValueSchema } from './BillingMeterResourceBillingMeterValue';
import type { BillingMeterResourceCustomerMappingSettings } from './BillingMeterResourceCustomerMappingSettings';
import { BillingMeterResourceCustomerMappingSettingsSchema } from './BillingMeterResourceCustomerMappingSettings';
/**
 * BillingMeter
 *
 * Meters specify how to aggregate meter events over a billing period. Meter events represent the actions that customers take in your system. Meters attach to prices and form the basis of the bill.

Related guide: [Usage based billing](https://docs.stripe.com/billing/subscriptions/usage-based)
 */
export interface BillingMeter {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * BillingMeterResourceCustomerMappingSettings
   *
   * 
   */
  customerMapping: BillingMeterResourceCustomerMappingSettings;
  /**
   * BillingMeterResourceAggregationSettings
   *
   * 
   */
  defaultAggregation: BillingMeterResourceAggregationSettings;
  /**
   * The meter's name.
   */
  displayName: string;
  /**
   * The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.
   */
  eventName: string;
  /**
   * The time window which meter events have been pre-aggregated for, if any.
   */
  eventTimeWindow?: string;
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
   * The meter's status.
   */
  status: string;
  /**
   * BillingMeterResourceBillingMeterStatusTransitions
   *
   * 
   */
  statusTransitions: BillingMeterResourceBillingMeterStatusTransitions;
  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
  /**
   * BillingMeterResourceBillingMeterValue
   *
   * 
   */
  valueSettings: BillingMeterResourceBillingMeterValue;
}

export const BillingMeterSchema: TypedSchema<BillingMeter> = typed<BillingMeter>(object({
  created: number(),
  customerMapping: BillingMeterResourceCustomerMappingSettingsSchema,
  defaultAggregation: BillingMeterResourceAggregationSettingsSchema,
  displayName: string(),
  eventName: string(),
  eventTimeWindow: optional(string()),
  id: string(),
  livemode: boolean(),
  object: string(),
  status: string(),
  statusTransitions: BillingMeterResourceBillingMeterStatusTransitionsSchema,
  updated: number(),
  valueSettings: BillingMeterResourceBillingMeterValueSchema,
}));