import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PortalBusinessProfile
 *
 * 
 */
export interface PortalBusinessProfile {
  /**
   * The messaging shown to customers in the portal.
   */
  headline?: string;
  /**
   * A link to the business’s publicly available privacy policy.
   */
  privacyPolicyUrl?: string;
  /**
   * A link to the business’s publicly available terms of service.
   */
  termsOfServiceUrl?: string;
}

export const PortalBusinessProfileSchema: TypedSchema<PortalBusinessProfile> = typed<PortalBusinessProfile>(object({
  headline: optional(string()),
  privacyPolicyUrl: optional(string()),
  termsOfServiceUrl: optional(string()),
}));