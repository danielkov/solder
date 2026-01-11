import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_mandate_options_card
 *
 * 
 */
export interface InvoiceMandateOptionsCard {
  /**
   * Amount to be charged for future payments.
   */
  amount?: number;
  /**
   * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
   */
  amountType?: string;
  /**
   * A description of the mandate or subscription that is meant to be displayed to the customer.
   */
  description?: string;
}

export const InvoiceMandateOptionsCardSchema: TypedSchema<InvoiceMandateOptionsCard> = typed<InvoiceMandateOptionsCard>(object({
  amount: optional(number()),
  amountType: optional(string()),
  description: optional(string()),
}));