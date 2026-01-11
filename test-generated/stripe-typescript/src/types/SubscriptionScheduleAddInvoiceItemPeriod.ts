import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd } from './SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd';
import { SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEndSchema } from './SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd';
import type { SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart } from './SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart';
import { SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStartSchema } from './SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart';
/**
 * SubscriptionScheduleAddInvoiceItemPeriod
 *
 * 
 */
export interface SubscriptionScheduleAddInvoiceItemPeriod {
  /**
   * SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd
   *
   * 
   */
  end: SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd;
  /**
   * SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart
   *
   * 
   */
  start: SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart;
}

export const SubscriptionScheduleAddInvoiceItemPeriodSchema: TypedSchema<SubscriptionScheduleAddInvoiceItemPeriod> = typed<SubscriptionScheduleAddInvoiceItemPeriod>(object({
  end: SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEndSchema,
  start: SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStartSchema,
}));