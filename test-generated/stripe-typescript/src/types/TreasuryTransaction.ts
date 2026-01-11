import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { EntriesProperty } from './EntriesProperty';
import { EntriesPropertySchema } from './EntriesProperty';
import type { TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions } from './TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions';
import { TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitionsSchema } from './TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions';
import type { TreasuryTransactionsResourceBalanceImpact } from './TreasuryTransactionsResourceBalanceImpact';
import { TreasuryTransactionsResourceBalanceImpactSchema } from './TreasuryTransactionsResourceBalanceImpact';
import type { TreasuryTransactionsResourceFlowDetails } from './TreasuryTransactionsResourceFlowDetails';
import { TreasuryTransactionsResourceFlowDetailsSchema } from './TreasuryTransactionsResourceFlowDetails';
/**
 * TreasuryTransactionsResourceTransaction
 *
 * Transactions represent changes to a [FinancialAccount's](https://stripe.com/docs/api#financial_accounts) balance.
 */
export interface TreasuryTransaction {
  /**
   * Amount (in cents) transferred.
   */
  amount: number;
  /**
   * TreasuryTransactionsResourceBalanceImpact
   *
   * Change to a FinancialAccount's balance
   */
  balanceImpact: TreasuryTransactionsResourceBalanceImpact;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string;
  /**
   * TreasuryTransactionsResourceTransactionEntryList
   *
   * A list of TransactionEntries that are part of this Transaction. This cannot be expanded in any list endpoints.
   */
  entries?: EntriesProperty;
  /**
   * The FinancialAccount associated with this object.
   */
  financialAccount: string;
  /**
   * ID of the flow that created the Transaction.
   */
  flow?: string;
  /**
   * Details of the flow that created the Transaction.
   */
  flowDetails?: TreasuryTransactionsResourceFlowDetails;
  /**
   * Type of the flow that created the Transaction.
   */
  flowType: string;
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
   * Status of the Transaction.
   */
  status: string;
  /**
   * TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions
   *
   * 
   */
  statusTransitions: TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions;
}

export const TreasuryTransactionSchema: TypedSchema<TreasuryTransaction> = typed<TreasuryTransaction>(object({
  amount: number(),
  balanceImpact: TreasuryTransactionsResourceBalanceImpactSchema,
  created: number(),
  currency: string(),
  description: string(),
  get entries() { return optional(EntriesPropertySchema) },
  financialAccount: string(),
  flow: optional(string()),
  get flowDetails() { return optional(TreasuryTransactionsResourceFlowDetailsSchema) },
  flowType: string(),
  id: string(),
  livemode: boolean(),
  object: string(),
  status: string(),
  statusTransitions: TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitionsSchema,
}));