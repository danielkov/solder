import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ApplicationUnion } from './ApplicationUnion';
import { ApplicationUnionSchema } from './ApplicationUnion';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { SubscriptionOrRef } from './SubscriptionOrRef';
import { SubscriptionOrRefSchema } from './SubscriptionOrRef';
import type { SubscriptionScheduleCurrentPhase } from './SubscriptionScheduleCurrentPhase';
import { SubscriptionScheduleCurrentPhaseSchema } from './SubscriptionScheduleCurrentPhase';
import type { SubscriptionSchedulePhaseConfiguration } from './SubscriptionSchedulePhaseConfiguration';
import { SubscriptionSchedulePhaseConfigurationSchema } from './SubscriptionSchedulePhaseConfiguration';
import type { SubscriptionSchedulesResourceDefaultSettings } from './SubscriptionSchedulesResourceDefaultSettings';
import { SubscriptionSchedulesResourceDefaultSettingsSchema } from './SubscriptionSchedulesResourceDefaultSettings';
import type { SubscriptionsResourceBillingMode } from './SubscriptionsResourceBillingMode';
import { SubscriptionsResourceBillingModeSchema } from './SubscriptionsResourceBillingMode';
import type { TestClockOrRef } from './TestClockOrRef';
import { TestClockOrRefSchema } from './TestClockOrRef';
/**
 * SubscriptionSchedule
 *
 * A subscription schedule allows you to create and manage the lifecycle of a subscription by predefining expected changes.

Related guide: [Subscription schedules](https://stripe.com/docs/billing/subscriptions/subscription-schedules)
 */
export interface SubscriptionSchedule {
  /**
   * ID of the Connect Application that created the schedule.
   */
  application?: ApplicationUnion;
  /**
   * SubscriptionsResourceBillingMode
   *
   * The billing mode of the subscription.
   */
  billingMode: SubscriptionsResourceBillingMode;
  /**
   * Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch.
   */
  canceledAt?: number;
  /**
   * Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch.
   */
  completedAt?: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`.
   */
  currentPhase?: SubscriptionScheduleCurrentPhase;
  /**
   * ID of the customer who owns the subscription schedule.
   */
  customer: CustomerUnion;
  /**
   * SubscriptionSchedulesResourceDefaultSettings
   *
   * 
   */
  defaultSettings: SubscriptionSchedulesResourceDefaultSettings;
  /**
   * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
   */
  endBehavior: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Configuration for the subscription schedule's phases.
   */
  phases: Array<SubscriptionSchedulePhaseConfiguration>;
  /**
   * Time at which the subscription schedule was released. Measured in seconds since the Unix epoch.
   */
  releasedAt?: number;
  /**
   * ID of the subscription once managed by the subscription schedule (if it is released).
   */
  releasedSubscription?: string;
  /**
   * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
   */
  status: string;
  /**
   * ID of the subscription managed by the subscription schedule.
   */
  subscription?: SubscriptionOrRef;
  /**
   * ID of the test clock this subscription schedule belongs to.
   */
  testClock?: TestClockOrRef;
}

export const SubscriptionScheduleSchema: TypedSchema<SubscriptionSchedule> = typed<SubscriptionSchedule>(object({
  get application() { return optional(ApplicationUnionSchema) },
  billingMode: SubscriptionsResourceBillingModeSchema,
  canceledAt: optional(number()),
  completedAt: optional(number()),
  created: number(),
  get currentPhase() { return optional(SubscriptionScheduleCurrentPhaseSchema) },
  customer: CustomerUnionSchema,
  defaultSettings: SubscriptionSchedulesResourceDefaultSettingsSchema,
  endBehavior: string(),
  id: string(),
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  object: string(),
  phases: array(SubscriptionSchedulePhaseConfigurationSchema),
  releasedAt: optional(number()),
  releasedSubscription: optional(string()),
  status: string(),
  get subscription() { return optional(SubscriptionOrRefSchema) },
  get testClock() { return optional(TestClockOrRefSchema) },
}));