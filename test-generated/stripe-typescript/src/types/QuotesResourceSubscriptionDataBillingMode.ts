import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SubscriptionsResourceBillingModeFlexible } from './SubscriptionsResourceBillingModeFlexible';
import { SubscriptionsResourceBillingModeFlexibleSchema } from './SubscriptionsResourceBillingModeFlexible';
/**
 * QuotesResourceSubscriptionDataBillingMode
 *
 * The billing mode of the quote.
 */
export interface QuotesResourceSubscriptionDataBillingMode {
  /**
   * SubscriptionsResourceBillingModeFlexible
   *
   * 
   */
  flexible?: SubscriptionsResourceBillingModeFlexible;
  /**
   * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
   */
  type: string;
}

export const QuotesResourceSubscriptionDataBillingModeSchema: TypedSchema<QuotesResourceSubscriptionDataBillingMode> = typed<QuotesResourceSubscriptionDataBillingMode>(object({
  get flexible() { return optional(SubscriptionsResourceBillingModeFlexibleSchema) },
  type: string(),
}));