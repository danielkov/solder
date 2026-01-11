import { TypedSchema, array, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { InvoiceItemThresholdReason } from './InvoiceItemThresholdReason';
import { InvoiceItemThresholdReasonSchema } from './InvoiceItemThresholdReason';
/**
 * InvoiceThresholdReason
 *
 * 
 */
export interface InvoiceThresholdReason {
  /**
   * The total invoice amount threshold boundary if it triggered the threshold invoice.
   */
  amountGte?: number;
  /**
   * Indicates which line items triggered a threshold invoice.
   */
  itemReasons: Array<InvoiceItemThresholdReason>;
}

export const InvoiceThresholdReasonSchema: TypedSchema<InvoiceThresholdReason> = typed<InvoiceThresholdReason>(object({
  amountGte: optional(number()),
  itemReasons: array(InvoiceItemThresholdReasonSchema),
}));