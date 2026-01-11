import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingCardholderUserTermsAcceptance
 *
 * 
 */
export interface IssuingCardholderUserTermsAcceptance {
  /**
   * The Unix timestamp marking when the cardholder accepted the Authorized User Terms.
   */
  date?: number;
  /**
   * The IP address from which the cardholder accepted the Authorized User Terms.
   */
  ip?: string;
  /**
   * The user agent of the browser from which the cardholder accepted the Authorized User Terms.
   */
  userAgent?: string;
}

export const IssuingCardholderUserTermsAcceptanceSchema: TypedSchema<IssuingCardholderUserTermsAcceptance> = typed<IssuingCardholderUserTermsAcceptance>(object({
  date: optional(number()),
  ip: optional(string()),
  userAgent: optional(string()),
}));