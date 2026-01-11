import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * internal_card
 *
 * 
 */
export interface InternalCard {
  /**
   * Brand of the card used in the transaction
   */
  brand?: string;
  /**
   * Two-letter ISO code representing the country of the card
   */
  country?: string;
  /**
   * Two digit number representing the card's expiration month
   */
  expMonth?: number;
  /**
   * Two digit number representing the card's expiration year
   */
  expYear?: number;
  /**
   * The last 4 digits of the card
   */
  last4?: string;
}

export const InternalCardSchema: TypedSchema<InternalCard> = typed<InternalCard>(object({
  brand: optional(string()),
  country: optional(string()),
  expMonth: optional(number()),
  expYear: optional(number()),
  last4: optional(string()),
}));