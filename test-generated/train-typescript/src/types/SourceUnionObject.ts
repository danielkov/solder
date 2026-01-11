import { TypedSchema, literal, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Card
 *
 * A card (debit or credit) to take payment from.
 */
export interface SourceUnionObject {
  addressCity?: string;
  addressCountry: string;
  addressLine1?: string;
  addressLine2?: string;
  addressPostCode?: string;
  /**
   * Card security code, 3 or 4 digits usually found on the back of the card.
   */
  cvc: string;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth: number;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear: number;
  /**
   * Cardholder's full name as it appears on the card.
   */
  name: string;
  /**
   * The card number, as a string without any separators. On read all but the last four digits will be masked for security.
   */
  number: string;
  object?: "card";
}

export const SourceUnionObjectSchema: TypedSchema<SourceUnionObject> = typed<SourceUnionObject>(object({
  addressCity: optional(string()),
  addressCountry: string(),
  addressLine1: optional(string()),
  addressLine2: optional(string()),
  addressPostCode: optional(string()),
  cvc: string(),
  expMonth: number(),
  expYear: number(),
  name: string(),
  number: string(),
  object: optional(literal("card")),
}));