import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd
 *
 * 
 */
export interface SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd {
  /**
   * A precise Unix timestamp for the end of the invoice item period. Must be greater than or equal to `period.start`.
   */
  timestamp?: number;
  /**
   * Select how to calculate the end of the invoice item period.
   */
  type: string;
}

export const SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEndSchema: TypedSchema<SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd> = typed<SubscriptionSchedulesResourceInvoiceItemPeriodResourcePeriodEnd>(object({
  timestamp: optional(number()),
  type: string(),
}));