import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TransactionOrRef2 } from './TransactionOrRef2';
import { TransactionOrRef2Schema } from './TransactionOrRef2';
import type { TreasuryTransactionsResourceBalanceImpact } from './TreasuryTransactionsResourceBalanceImpact';
import { TreasuryTransactionsResourceBalanceImpactSchema } from './TreasuryTransactionsResourceBalanceImpact';
import type { TreasuryTransactionsResourceFlowDetails } from './TreasuryTransactionsResourceFlowDetails';
import { TreasuryTransactionsResourceFlowDetailsSchema } from './TreasuryTransactionsResourceFlowDetails';
/**
 * TreasuryTransactionsResourceTransactionEntry
 *
 * TransactionEntries represent individual units of money movements within a single [Transaction](https://stripe.com/docs/api#transactions).
 */
export interface TreasuryTransactionEntry {
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
   * When the TransactionEntry will impact the FinancialAccount's balance.
   */
  effectiveAt: number;
  /**
   * The FinancialAccount associated with this object.
   */
  financialAccount: string;
  /**
   * Token of the flow associated with the TransactionEntry.
   */
  flow?: string;
  /**
   * Details of the flow associated with the TransactionEntry.
   */
  flowDetails?: TreasuryTransactionsResourceFlowDetails;
  /**
   * Type of the flow associated with the TransactionEntry.
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
   * The Transaction associated with this object.
   */
  transaction: TransactionOrRef2;
  /**
   * The specific money movement that generated the TransactionEntry.
   */
  type: string;
}

export const TreasuryTransactionEntrySchema: TypedSchema<TreasuryTransactionEntry> = typed<TreasuryTransactionEntry>(object({
  balanceImpact: TreasuryTransactionsResourceBalanceImpactSchema,
  created: number(),
  currency: string(),
  effectiveAt: number(),
  financialAccount: string(),
  flow: optional(string()),
  get flowDetails() { return optional(TreasuryTransactionsResourceFlowDetailsSchema) },
  flowType: string(),
  id: string(),
  livemode: boolean(),
  object: string(),
  transaction: TransactionOrRef2Schema,
  type: string(),
}));