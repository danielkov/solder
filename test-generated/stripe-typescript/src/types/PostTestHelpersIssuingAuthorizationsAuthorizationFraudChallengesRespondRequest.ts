import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondRequest {
  /**
   * Whether to simulate the user confirming that the transaction was legitimate (true) or telling Stripe that it was fraudulent (false).
   */
  confirmed: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondRequestSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondRequest> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondRequest>(object({
  confirmed: boolean(),
  expand: optional(array(string())),
}));