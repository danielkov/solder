import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SubscriptionsResourceBillingModeFlexible } from './SubscriptionsResourceBillingModeFlexible';
import { SubscriptionsResourceBillingModeFlexibleSchema } from './SubscriptionsResourceBillingModeFlexible';
/**
 * SubscriptionsResourceBillingMode
 *
 * The billing mode of the subscription.
 */
export interface SubscriptionsResourceBillingMode {
  /**
   * Configure behavior for flexible billing mode
   */
  flexible?: SubscriptionsResourceBillingModeFlexible;
  /**
   * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
   */
  type: string;
  /**
   * Details on when the current billing_mode was adopted.
   */
  updatedAt?: number;
}

export const SubscriptionsResourceBillingModeSchema: TypedSchema<SubscriptionsResourceBillingMode> = typed<SubscriptionsResourceBillingMode>(object({
  get flexible() { return optional(SubscriptionsResourceBillingModeFlexibleSchema) },
  type: string(),
  updatedAt: optional(number()),
}));