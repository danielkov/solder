import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingCardGooglePay
 *
 * 
 */
export interface IssuingCardGooglePay {
  /**
   * Google Pay Eligibility
   */
  eligible: boolean;
  /**
   * Reason the card is ineligible for Google Pay
   */
  ineligibleReason?: string;
}

export const IssuingCardGooglePaySchema: TypedSchema<IssuingCardGooglePay> = typed<IssuingCardGooglePay>(object({
  eligible: boolean(),
  ineligibleReason: optional(string()),
}));