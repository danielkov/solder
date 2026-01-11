import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * fraud_details
 *
 * A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
 */
export interface PostChargesChargeRequestFraudDetails {
  userReport: string;
}

export const PostChargesChargeRequestFraudDetailsSchema: TypedSchema<PostChargesChargeRequestFraudDetails> = typed<PostChargesChargeRequestFraudDetails>(object({
  userReport: string(),
}));