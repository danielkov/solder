import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemption } from './PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemption';
import { PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemptionSchema } from './PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemption';
import type { PostTestHelpersIssuingAuthorizationsRequestThreeDSecure } from './PostTestHelpersIssuingAuthorizationsRequestThreeDSecure';
import { PostTestHelpersIssuingAuthorizationsRequestThreeDSecureSchema } from './PostTestHelpersIssuingAuthorizationsRequestThreeDSecure';
/**
 * verification_data_specs
 *
 * Verifications that Stripe performed on information that the cardholder provided to the merchant.
 */
export interface PostTestHelpersIssuingAuthorizationsRequestVerificationData {
  addressLine1Check?: string;
  addressPostalCodeCheck?: string;
  /**
   * authentication_exemption_specs
   */
  authenticationExemption?: PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemption;
  cvcCheck?: string;
  expiryCheck?: string;
  /**
   * three_d_secure_specs
   */
  threeDSecure?: PostTestHelpersIssuingAuthorizationsRequestThreeDSecure;
}

export const PostTestHelpersIssuingAuthorizationsRequestVerificationDataSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestVerificationData> = typed<PostTestHelpersIssuingAuthorizationsRequestVerificationData>(object({
  addressLine1Check: optional(string()),
  addressPostalCodeCheck: optional(string()),
  get authenticationExemption() { return optional(PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemptionSchema) },
  cvcCheck: optional(string()),
  expiryCheck: optional(string()),
  get threeDSecure() { return optional(PostTestHelpersIssuingAuthorizationsRequestThreeDSecureSchema) },
}));