import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationFraudChallenge
 *
 * 
 */
export interface IssuingAuthorizationFraudChallenge {
  /**
   * The method by which the fraud challenge was delivered to the cardholder.
   */
  channel: string;
  /**
   * The status of the fraud challenge.
   */
  status: string;
  /**
   * If the challenge is not deliverable, the reason why.
   */
  undeliverableReason?: string;
}

export const IssuingAuthorizationFraudChallengeSchema: TypedSchema<IssuingAuthorizationFraudChallenge> = typed<IssuingAuthorizationFraudChallenge>(object({
  channel: string(),
  status: string(),
  undeliverableReason: optional(string()),
}));