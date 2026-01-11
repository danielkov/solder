import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryReceivedCreditsResourceStatusTransitions
 *
 * 
 */
export interface TreasuryReceivedCreditsResourceStatusTransitions {
  /**
   * Timestamp describing when the CreditReversal changed status to `posted`
   */
  postedAt?: number;
}

export const TreasuryReceivedCreditsResourceStatusTransitionsSchema: TypedSchema<TreasuryReceivedCreditsResourceStatusTransitions> = typed<TreasuryReceivedCreditsResourceStatusTransitions>(object({
  postedAt: optional(number()),
}));