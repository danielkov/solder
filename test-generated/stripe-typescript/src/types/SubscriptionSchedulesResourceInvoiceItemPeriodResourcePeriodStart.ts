import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart
 *
 * 
 */
export interface SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart {
  /**
   * A precise Unix timestamp for the start of the invoice item period. Must be less than or equal to `period.end`.
   */
  timestamp?: number;
  /**
   * Select how to calculate the start of the invoice item period.
   */
  type: string;
}

export const SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStartSchema: TypedSchema<SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart> = typed<SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodStart>(object({
  timestamp: optional(number()),
  type: string(),
}));