import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryReceivedCreditsResourceReversalDetails
 *
 * 
 */
export interface TreasuryReceivedCreditsResourceReversalDetails {
  /**
   * Time before which a ReceivedCredit can be reversed.
   */
  deadline?: number;
  /**
   * Set if a ReceivedCredit cannot be reversed.
   */
  restrictedReason?: string;
}

export const TreasuryReceivedCreditsResourceReversalDetailsSchema: TypedSchema<TreasuryReceivedCreditsResourceReversalDetails> = typed<TreasuryReceivedCreditsResourceReversalDetails>(object({
  deadline: optional(number()),
  restrictedReason: optional(string()),
}));