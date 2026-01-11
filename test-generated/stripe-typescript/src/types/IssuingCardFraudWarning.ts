import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingCardFraudWarning
 *
 * 
 */
export interface IssuingCardFraudWarning {
  /**
   * Timestamp of the most recent fraud warning.
   */
  startedAt?: number;
  /**
   * The type of fraud warning that most recently took place on this card. This field updates with every new fraud warning, so the value changes over time. If populated, cancel and reissue the card.
   */
  type?: string;
}

export const IssuingCardFraudWarningSchema: TypedSchema<IssuingCardFraudWarning> = typed<IssuingCardFraudWarning>(object({
  startedAt: optional(number()),
  type: optional(string()),
}));