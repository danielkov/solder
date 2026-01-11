import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { InvoiceOrRef } from './InvoiceOrRef';
import { InvoiceOrRefSchema } from './InvoiceOrRef';
/**
 * InvoicesResourceFromInvoice
 *
 * 
 */
export interface InvoicesResourceFromInvoice {
  /**
   * The relation between this invoice and the cloned invoice
   */
  action: string;
  /**
   * The invoice that was cloned.
   */
  invoice: InvoiceOrRef;
}

export const InvoicesResourceFromInvoiceSchema: TypedSchema<InvoicesResourceFromInvoice> = typed<InvoicesResourceFromInvoice>(object({
  action: string(),
  invoice: InvoiceOrRefSchema,
}));