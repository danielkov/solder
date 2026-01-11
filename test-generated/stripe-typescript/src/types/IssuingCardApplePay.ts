import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingCardApplePay
 *
 * 
 */
export interface IssuingCardApplePay {
  /**
   * Apple Pay Eligibility
   */
  eligible: boolean;
  /**
   * Reason the card is ineligible for Apple Pay
   */
  ineligibleReason?: string;
}

export const IssuingCardApplePaySchema: TypedSchema<IssuingCardApplePay> = typed<IssuingCardApplePay>(object({
  eligible: boolean(),
  ineligibleReason: optional(string()),
}));