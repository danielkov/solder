import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { InvoiceOrRef } from './InvoiceOrRef';
import { InvoiceOrRefSchema } from './InvoiceOrRef';
/**
 * BillingCreditGrantsResourceBalanceCreditsApplied
 *
 * 
 */
export interface BillingCreditGrantsResourceBalanceCreditsApplied {
  /**
   * The invoice to which the billing credits were applied.
   */
  invoice: InvoiceOrRef;
  /**
   * The invoice line item to which the billing credits were applied.
   */
  invoiceLineItem: string;
}

export const BillingCreditGrantsResourceBalanceCreditsAppliedSchema: TypedSchema<BillingCreditGrantsResourceBalanceCreditsApplied> = typed<BillingCreditGrantsResourceBalanceCreditsApplied>(object({
  invoice: InvoiceOrRefSchema,
  invoiceLineItem: string(),
}));