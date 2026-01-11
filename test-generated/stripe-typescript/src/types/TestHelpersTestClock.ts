import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingClocksResourceStatusDetailsStatusDetails } from './BillingClocksResourceStatusDetailsStatusDetails';
import { BillingClocksResourceStatusDetailsStatusDetailsSchema } from './BillingClocksResourceStatusDetailsStatusDetails';
/**
 * TestClock
 *
 * A test clock enables deterministic control over objects in testmode. With a test clock, you can create
objects at a frozen time in the past or future, and advance to a specific future time to observe webhooks and state changes. After the clock advances,
you can either validate the current state of your scenario (and test your assumptions), change the current state of your scenario (and test more complex scenarios), or keep advancing forward in time.
 */
export interface TestHelpersTestClock {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Time at which this clock is scheduled to auto delete.
   */
  deletesAfter: number;
  /**
   * Time at which all objects belonging to this clock are frozen.
   */
  frozenTime: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The custom name supplied at creation.
   */
  name?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The status of the Test Clock.
   */
  status: string;
  /**
   * BillingClocksResourceStatusDetailsStatusDetails
   *
   * 
   */
  statusDetails: BillingClocksResourceStatusDetailsStatusDetails;
}

export const TestHelpersTestClockSchema: TypedSchema<TestHelpersTestClock> = typed<TestHelpersTestClock>(object({
  created: number(),
  deletesAfter: number(),
  frozenTime: number(),
  id: string(),
  livemode: boolean(),
  name: optional(string()),
  object: string(),
  status: string(),
  statusDetails: BillingClocksResourceStatusDetailsStatusDetailsSchema,
}));