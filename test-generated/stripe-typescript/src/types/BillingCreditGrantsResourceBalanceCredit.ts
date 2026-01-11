import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingCreditGrantsResourceAmount } from './BillingCreditGrantsResourceAmount';
import { BillingCreditGrantsResourceAmountSchema } from './BillingCreditGrantsResourceAmount';
import type { BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided } from './BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided';
import { BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoidedSchema } from './BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided';
/**
 * BillingCreditGrantsResourceBalanceCredit
 *
 * 
 */
export interface BillingCreditGrantsResourceBalanceCredit {
  /**
   * BillingCreditGrantsResourceAmount
   *
   * 
   */
  amount: BillingCreditGrantsResourceAmount;
  /**
   * Details of the invoice to which the reinstated credits were originally applied. Only present if `type` is `credits_application_invoice_voided`.
   */
  creditsApplicationInvoiceVoided?: BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided;
  /**
   * The type of credit transaction.
   */
  type: string;
}

export const BillingCreditGrantsResourceBalanceCreditSchema: TypedSchema<BillingCreditGrantsResourceBalanceCredit> = typed<BillingCreditGrantsResourceBalanceCredit>(object({
  amount: BillingCreditGrantsResourceAmountSchema,
  get creditsApplicationInvoiceVoided() { return optional(BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoidedSchema) },
  type: string(),
}));