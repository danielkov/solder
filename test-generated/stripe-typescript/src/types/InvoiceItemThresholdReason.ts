import { TypedSchema, array, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * InvoiceItemThresholdReason
 *
 * 
 */
export interface InvoiceItemThresholdReason {
  /**
   * The IDs of the line items that triggered the threshold invoice.
   */
  lineItemIds: Array<string>;
  /**
   * The quantity threshold boundary that applied to the given line item.
   */
  usageGte: number;
}

export const InvoiceItemThresholdReasonSchema: TypedSchema<InvoiceItemThresholdReason> = typed<InvoiceItemThresholdReason>(object({
  lineItemIds: array(string()),
  usageGte: number(),
}));