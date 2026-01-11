import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions
 *
 * 
 */
export interface TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions {
  /**
   * Timestamp describing when the Transaction changed status to `posted`.
   */
  postedAt?: number;
  /**
   * Timestamp describing when the Transaction changed status to `void`.
   */
  voidAt?: number;
}

export const TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitionsSchema: TypedSchema<TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions> = typed<TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions>(object({
  postedAt: optional(number()),
  voidAt: optional(number()),
}));