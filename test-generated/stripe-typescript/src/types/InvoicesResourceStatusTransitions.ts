import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * InvoicesResourceStatusTransitions
 *
 * 
 */
export interface InvoicesResourceStatusTransitions {
  /**
   * The time that the invoice draft was finalized.
   */
  finalizedAt?: number;
  /**
   * The time that the invoice was marked uncollectible.
   */
  markedUncollectibleAt?: number;
  /**
   * The time that the invoice was paid.
   */
  paidAt?: number;
  /**
   * The time that the invoice was voided.
   */
  voidedAt?: number;
}

export const InvoicesResourceStatusTransitionsSchema: TypedSchema<InvoicesResourceStatusTransitions> = typed<InvoicesResourceStatusTransitions>(object({
  finalizedAt: optional(number()),
  markedUncollectibleAt: optional(number()),
  paidAt: optional(number()),
  voidedAt: optional(number()),
}));