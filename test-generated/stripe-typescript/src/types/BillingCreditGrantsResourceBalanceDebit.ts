import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingCreditGrantsResourceAmount } from './BillingCreditGrantsResourceAmount';
import { BillingCreditGrantsResourceAmountSchema } from './BillingCreditGrantsResourceAmount';
import type { BillingCreditGrantsResourceBalanceCreditsApplied } from './BillingCreditGrantsResourceBalanceCreditsApplied';
import { BillingCreditGrantsResourceBalanceCreditsAppliedSchema } from './BillingCreditGrantsResourceBalanceCreditsApplied';
/**
 * BillingCreditGrantsResourceBalanceDebit
 *
 * 
 */
export interface BillingCreditGrantsResourceBalanceDebit {
  /**
   * BillingCreditGrantsResourceAmount
   *
   * 
   */
  amount: BillingCreditGrantsResourceAmount;
  /**
   * Details of how the billing credits were applied to an invoice. Only present if `type` is `credits_applied`.
   */
  creditsApplied?: BillingCreditGrantsResourceBalanceCreditsApplied;
  /**
   * The type of debit transaction.
   */
  type: string;
}

export const BillingCreditGrantsResourceBalanceDebitSchema: TypedSchema<BillingCreditGrantsResourceBalanceDebit> = typed<BillingCreditGrantsResourceBalanceDebit>(object({
  amount: BillingCreditGrantsResourceAmountSchema,
  get creditsApplied() { return optional(BillingCreditGrantsResourceBalanceCreditsAppliedSchema) },
  type: string(),
}));