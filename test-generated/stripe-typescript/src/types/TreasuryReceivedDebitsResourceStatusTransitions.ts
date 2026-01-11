import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryReceivedDebitsResourceStatusTransitions
 *
 * 
 */
export interface TreasuryReceivedDebitsResourceStatusTransitions {
  /**
   * Timestamp describing when the DebitReversal changed status to `completed`.
   */
  completedAt?: number;
}

export const TreasuryReceivedDebitsResourceStatusTransitionsSchema: TypedSchema<TreasuryReceivedDebitsResourceStatusTransitions> = typed<TreasuryReceivedDebitsResourceStatusTransitions>(object({
  completedAt: optional(number()),
}));