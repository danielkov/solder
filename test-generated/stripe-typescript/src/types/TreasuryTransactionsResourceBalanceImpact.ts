import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryTransactionsResourceBalanceImpact
 *
 * Change to a FinancialAccount's balance
 */
export interface TreasuryTransactionsResourceBalanceImpact {
  /**
   * The change made to funds the user can spend right now.
   */
  cash: number;
  /**
   * The change made to funds that are not spendable yet, but will become available at a later time.
   */
  inboundPending: number;
  /**
   * The change made to funds in the account, but not spendable because they are being held for pending outbound flows.
   */
  outboundPending: number;
}

export const TreasuryTransactionsResourceBalanceImpactSchema: TypedSchema<TreasuryTransactionsResourceBalanceImpact> = typed<TreasuryTransactionsResourceBalanceImpact>(object({
  cash: number(),
  inboundPending: number(),
  outboundPending: number(),
}));