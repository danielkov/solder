import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * ChargeFraudDetails
 *
 * 
 */
export interface ChargeFraudDetails {
  /**
   * Assessments from Stripe. If set, the value is `fraudulent`.
   */
  stripeReport?: string;
  /**
   * Assessments reported by you. If set, possible values of are `safe` and `fraudulent`.
   */
  userReport?: string;
}

export const ChargeFraudDetailsSchema: TypedSchema<ChargeFraudDetails> = typed<ChargeFraudDetails>(object({
  stripeReport: optional(string()),
  userReport: optional(string()),
}));