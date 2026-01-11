import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryReceivedDebitsResourceReversalDetails
 *
 * 
 */
export interface TreasuryReceivedDebitsResourceReversalDetails {
  /**
   * Time before which a ReceivedDebit can be reversed.
   */
  deadline?: number;
  /**
   * Set if a ReceivedDebit can't be reversed.
   */
  restrictedReason?: string;
}

export const TreasuryReceivedDebitsResourceReversalDetailsSchema: TypedSchema<TreasuryReceivedDebitsResourceReversalDetails> = typed<TreasuryReceivedDebitsResourceReversalDetails>(object({
  deadline: optional(number()),
  restrictedReason: optional(string()),
}));