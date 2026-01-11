import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * three_d_secure_specs
 */
export interface PostTestHelpersIssuingAuthorizationsRequestThreeDSecure {
  result: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestThreeDSecureSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestThreeDSecure> = typed<PostTestHelpersIssuingAuthorizationsRequestThreeDSecure>(object({
  result: string(),
}));