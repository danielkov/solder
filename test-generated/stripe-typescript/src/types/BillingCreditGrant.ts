import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingCreditGrantsResourceAmount } from './BillingCreditGrantsResourceAmount';
import { BillingCreditGrantsResourceAmountSchema } from './BillingCreditGrantsResourceAmount';
import type { BillingCreditGrantsResourceApplicabilityConfig } from './BillingCreditGrantsResourceApplicabilityConfig';
import { BillingCreditGrantsResourceApplicabilityConfigSchema } from './BillingCreditGrantsResourceApplicabilityConfig';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TestClockOrRef } from './TestClockOrRef';
import { TestClockOrRefSchema } from './TestClockOrRef';
/**
 * CreditGrant
 *
 * A credit grant is an API resource that documents the allocation of some billing credits to a customer.

Related guide: [Billing credits](https://docs.stripe.com/billing/subscriptions/usage-based/billing-credits)
 */
export interface BillingCreditGrant {
  /**
   * BillingCreditGrantsResourceAmount
   *
   * 
   */
  amount: BillingCreditGrantsResourceAmount;
  /**
   * BillingCreditGrantsResourceApplicabilityConfig
   *
   * 
   */
  applicabilityConfig: BillingCreditGrantsResourceApplicabilityConfig;
  /**
   * The category of this credit grant. This is for tracking purposes and isn't displayed to the customer.
   */
  category: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * ID of the customer receiving the billing credits.
   */
  customer: CustomerUnion;
  /**
   * The time when the billing credits become effective-when they're eligible for use.
   */
  effectiveAt?: number;
  /**
   * The time when the billing credits expire. If not present, the billing credits don't expire.
   */
  expiresAt?: number;
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
  metadata: MetadataProperty;
  /**
   * A descriptive name shown in dashboard.
   */
  name?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The priority for applying this credit grant. The highest priority is 0 and the lowest is 100.
   */
  priority?: number;
  /**
   * ID of the test clock this credit grant belongs to.
   */
  testClock?: TestClockOrRef;
  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
  /**
   * The time when this credit grant was voided. If not present, the credit grant hasn't been voided.
   */
  voidedAt?: number;
}

export const BillingCreditGrantSchema: TypedSchema<BillingCreditGrant> = typed<BillingCreditGrant>(object({
  amount: BillingCreditGrantsResourceAmountSchema,
  applicabilityConfig: BillingCreditGrantsResourceApplicabilityConfigSchema,
  category: string(),
  created: number(),
  customer: CustomerUnionSchema,
  effectiveAt: optional(number()),
  expiresAt: optional(number()),
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  name: optional(string()),
  object: string(),
  priority: optional(number()),
  get testClock() { return optional(TestClockOrRefSchema) },
  updated: number(),
  voidedAt: optional(number()),
}));