import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * InvoiceLineItemPeriod
 *
 * 
 */
export interface InvoiceLineItemPeriod {
  /**
   * The end of the period, which must be greater than or equal to the start. This value is inclusive.
   */
  end: number;
  /**
   * The start of the period. This value is inclusive.
   */
  start: number;
}

export const InvoiceLineItemPeriodSchema: TypedSchema<InvoiceLineItemPeriod> = typed<InvoiceLineItemPeriod>(object({
  end: number(),
  start: number(),
}));