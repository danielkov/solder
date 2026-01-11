import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * authentication_exemption_specs
 */
export interface PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemption {
  claimedBy: string;
  type: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemptionSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemption> = typed<PostTestHelpersIssuingAuthorizationsRequestAuthenticationExemption>(object({
  claimedBy: string(),
  type: string(),
}));