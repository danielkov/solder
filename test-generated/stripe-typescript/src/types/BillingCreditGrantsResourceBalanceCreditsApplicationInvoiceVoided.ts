import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { InvoiceOrRef } from './InvoiceOrRef';
import { InvoiceOrRefSchema } from './InvoiceOrRef';
/**
 * BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided
 *
 * 
 */
export interface BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided {
  /**
   * The invoice to which the reinstated billing credits were originally applied.
   */
  invoice: InvoiceOrRef;
  /**
   * The invoice line item to which the reinstated billing credits were originally applied.
   */
  invoiceLineItem: string;
}

export const BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoidedSchema: TypedSchema<BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided> = typed<BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided>(object({
  invoice: InvoiceOrRefSchema,
  invoiceLineItem: string(),
}));