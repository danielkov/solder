import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * QuotesResourceStatusTransitions
 *
 * 
 */
export interface QuotesResourceStatusTransitions {
  /**
   * The time that the quote was accepted. Measured in seconds since Unix epoch.
   */
  acceptedAt?: number;
  /**
   * The time that the quote was canceled. Measured in seconds since Unix epoch.
   */
  canceledAt?: number;
  /**
   * The time that the quote was finalized. Measured in seconds since Unix epoch.
   */
  finalizedAt?: number;
}

export const QuotesResourceStatusTransitionsSchema: TypedSchema<QuotesResourceStatusTransitions> = typed<QuotesResourceStatusTransitions>(object({
  acceptedAt: optional(number()),
  canceledAt: optional(number()),
  finalizedAt: optional(number()),
}));