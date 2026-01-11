import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingAuthorizationAuthenticationExemption } from './IssuingAuthorizationAuthenticationExemption';
import { IssuingAuthorizationAuthenticationExemptionSchema } from './IssuingAuthorizationAuthenticationExemption';
import type { IssuingAuthorizationThreeDSecure } from './IssuingAuthorizationThreeDSecure';
import { IssuingAuthorizationThreeDSecureSchema } from './IssuingAuthorizationThreeDSecure';
/**
 * IssuingAuthorizationVerificationData
 *
 * 
 */
export interface IssuingAuthorizationVerificationData {
  /**
   * Whether the cardholder provided an address first line and if it matched the cardholder’s `billing.address.line1`.
   */
  addressLine1Check: string;
  /**
   * Whether the cardholder provided a postal code and if it matched the cardholder’s `billing.address.postal_code`.
   */
  addressPostalCodeCheck: string;
  /**
   * The exemption applied to this authorization.
   */
  authenticationExemption?: IssuingAuthorizationAuthenticationExemption;
  /**
   * Whether the cardholder provided a CVC and if it matched Stripe’s record.
   */
  cvcCheck: string;
  /**
   * Whether the cardholder provided an expiry date and if it matched Stripe’s record.
   */
  expiryCheck: string;
  /**
   * The postal code submitted as part of the authorization used for postal code verification.
   */
  postalCode?: string;
  /**
   * 3D Secure details.
   */
  threeDSecure?: IssuingAuthorizationThreeDSecure;
}

export const IssuingAuthorizationVerificationDataSchema: TypedSchema<IssuingAuthorizationVerificationData> = typed<IssuingAuthorizationVerificationData>(object({
  addressLine1Check: string(),
  addressPostalCodeCheck: string(),
  get authenticationExemption() { return optional(IssuingAuthorizationAuthenticationExemptionSchema) },
  cvcCheck: string(),
  expiryCheck: string(),
  postalCode: optional(string()),
  get threeDSecure() { return optional(IssuingAuthorizationThreeDSecureSchema) },
}));