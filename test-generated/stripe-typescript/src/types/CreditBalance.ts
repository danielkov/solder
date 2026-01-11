import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { BillingCreditGrantsResourceAmount } from './BillingCreditGrantsResourceAmount';
import { BillingCreditGrantsResourceAmountSchema } from './BillingCreditGrantsResourceAmount';
/**
 * CreditBalance
 *
 * 
 */
export interface CreditBalance {
  /**
   * BillingCreditGrantsResourceAmount
   *
   * 
   */
  availableBalance: BillingCreditGrantsResourceAmount;
  /**
   * BillingCreditGrantsResourceAmount
   *
   * 
   */
  ledgerBalance: BillingCreditGrantsResourceAmount;
}

export const CreditBalanceSchema: TypedSchema<CreditBalance> = typed<CreditBalance>(object({
  availableBalance: BillingCreditGrantsResourceAmountSchema,
  ledgerBalance: BillingCreditGrantsResourceAmountSchema,
}));