import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingCreditGrantsResourceBalanceCredit } from './BillingCreditGrantsResourceBalanceCredit';
import { BillingCreditGrantsResourceBalanceCreditSchema } from './BillingCreditGrantsResourceBalanceCredit';
import type { BillingCreditGrantsResourceBalanceDebit } from './BillingCreditGrantsResourceBalanceDebit';
import { BillingCreditGrantsResourceBalanceDebitSchema } from './BillingCreditGrantsResourceBalanceDebit';
import type { CreditGrantOrRef } from './CreditGrantOrRef';
import { CreditGrantOrRefSchema } from './CreditGrantOrRef';
import type { TestClockOrRef } from './TestClockOrRef';
import { TestClockOrRefSchema } from './TestClockOrRef';
/**
 * CreditBalanceTransaction
 *
 * A credit balance transaction is a resource representing a transaction (either a credit or a debit) against an existing credit grant.
 */
export interface BillingCreditBalanceTransaction {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Credit details for this credit balance transaction. Only present if type is `credit`.
   */
  credit?: BillingCreditGrantsResourceBalanceCredit;
  /**
   * The credit grant associated with this credit balance transaction.
   */
  creditGrant: CreditGrantOrRef;
  /**
   * Debit details for this credit balance transaction. Only present if type is `debit`.
   */
  debit?: BillingCreditGrantsResourceBalanceDebit;
  /**
   * The effective time of this credit balance transaction.
   */
  effectiveAt: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * ID of the test clock this credit balance transaction belongs to.
   */
  testClock?: TestClockOrRef;
  /**
   * The type of credit balance transaction (credit or debit).
   */
  type?: string;
}

export const BillingCreditBalanceTransactionSchema: TypedSchema<BillingCreditBalanceTransaction> = typed<BillingCreditBalanceTransaction>(object({
  created: number(),
  get credit() { return optional(BillingCreditGrantsResourceBalanceCreditSchema) },
  creditGrant: CreditGrantOrRefSchema,
  get debit() { return optional(BillingCreditGrantsResourceBalanceDebitSchema) },
  effectiveAt: number(),
  id: string(),
  livemode: boolean(),
  object: string(),
  get testClock() { return optional(TestClockOrRefSchema) },
  type: optional(string()),
}));