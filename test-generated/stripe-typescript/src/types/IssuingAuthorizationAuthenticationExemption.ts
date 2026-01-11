import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationAuthenticationExemption
 *
 * 
 */
export interface IssuingAuthorizationAuthenticationExemption {
  /**
   * The entity that requested the exemption, either the acquiring merchant or the Issuing user.
   */
  claimedBy: string;
  /**
   * The specific exemption claimed for this authorization.
   */
  type: string;
}

export const IssuingAuthorizationAuthenticationExemptionSchema: TypedSchema<IssuingAuthorizationAuthenticationExemption> = typed<IssuingAuthorizationAuthenticationExemption>(object({
  claimedBy: string(),
  type: string(),
}));