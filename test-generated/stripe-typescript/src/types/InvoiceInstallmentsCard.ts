import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * invoice_installments_card
 *
 * 
 */
export interface InvoiceInstallmentsCard {
  /**
   * Whether Installments are enabled for this Invoice.
   */
  enabled?: boolean;
}

export const InvoiceInstallmentsCardSchema: TypedSchema<InvoiceInstallmentsCard> = typed<InvoiceInstallmentsCard>(object({
  enabled: optional(boolean()),
}));