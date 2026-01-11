import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingCreditGrantsResourceMonetaryAmount } from './BillingCreditGrantsResourceMonetaryAmount';
import { BillingCreditGrantsResourceMonetaryAmountSchema } from './BillingCreditGrantsResourceMonetaryAmount';
/**
 * BillingCreditGrantsResourceAmount
 *
 * 
 */
export interface BillingCreditGrantsResourceAmount {
  /**
   * The monetary amount.
   */
  monetary?: BillingCreditGrantsResourceMonetaryAmount;
  /**
   * The type of this amount. We currently only support `monetary` billing credits.
   */
  type: string;
}

export const BillingCreditGrantsResourceAmountSchema: TypedSchema<BillingCreditGrantsResourceAmount> = typed<BillingCreditGrantsResourceAmount>(object({
  get monetary() { return optional(BillingCreditGrantsResourceMonetaryAmountSchema) },
  type: string(),
}));