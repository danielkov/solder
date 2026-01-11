import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { CreditBalance } from './CreditBalance';
import { CreditBalanceSchema } from './CreditBalance';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
/**
 * CreditBalanceSummary
 *
 * Indicates the billing credit balance for billing credits granted to a customer.
 */
export interface BillingCreditBalanceSummary {
  /**
   * The billing credit balances. One entry per credit grant currency. If a customer only has credit grants in a single currency, then this will have a single balance entry.
   */
  balances: Array<CreditBalance>;
  /**
   * The customer the balance is for.
   */
  customer: CustomerUnion;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const BillingCreditBalanceSummarySchema: TypedSchema<BillingCreditBalanceSummary> = typed<BillingCreditBalanceSummary>(object({
  balances: array(CreditBalanceSchema),
  customer: CustomerUnionSchema,
  livemode: boolean(),
  object: string(),
}));