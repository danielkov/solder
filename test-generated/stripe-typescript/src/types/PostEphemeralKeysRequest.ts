import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostEphemeralKeysRequest {
  /**
   * The ID of the Customer you'd like to modify using the resulting ephemeral key.
   */
  customer?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The ID of the Issuing Card you'd like to access using the resulting ephemeral key.
   */
  issuingCard?: string;
  /**
   * A single-use token, created by Stripe.js, used for creating ephemeral keys for Issuing Cards without exchanging sensitive information.
   */
  nonce?: string;
  /**
   * The ID of the Identity VerificationSession you'd like to access using the resulting ephemeral key
   */
  verificationSession?: string;
}

export const PostEphemeralKeysRequestSchema: TypedSchema<PostEphemeralKeysRequest> = typed<PostEphemeralKeysRequest>(object({
  customer: optional(string()),
  expand: optional(array(string())),
  issuingCard: optional(string()),
  nonce: optional(string()),
  verificationSession: optional(string()),
}));