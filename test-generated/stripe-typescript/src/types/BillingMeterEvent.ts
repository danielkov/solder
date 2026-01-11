import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';

import type { PayloadProperty } from './PayloadProperty';
import { PayloadPropertySchema } from './PayloadProperty';
/**
 * BillingMeterEvent
 *
 * Meter events represent actions that customers take in your system. You can use meter events to bill a customer based on their usage. Meter events are associated with billing meters, which define both the contents of the event’s payload and how to aggregate those events.
 */
export interface BillingMeterEvent {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The name of the meter event. Corresponds with the `event_name` field on a meter.
   */
  eventName: string;
  /**
   * A unique identifier for the event.
   */
  identifier: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The payload of the event. This contains the fields corresponding to a meter's `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and `value_settings.event_payload_key` (default is `value`). Read more about the [payload](https://stripe.com/docs/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
   */
  payload: PayloadProperty;
  /**
   * The timestamp passed in when creating the event. Measured in seconds since the Unix epoch.
   */
  timestamp: number;
}

export const BillingMeterEventSchema: TypedSchema<BillingMeterEvent> = typed<BillingMeterEvent>(object({
  created: number(),
  eventName: string(),
  identifier: string(),
  livemode: boolean(),
  object: string(),
  payload: PayloadPropertySchema,
  timestamp: number(),
}));