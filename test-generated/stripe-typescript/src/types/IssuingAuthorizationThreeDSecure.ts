import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationThreeDSecure
 *
 * 
 */
export interface IssuingAuthorizationThreeDSecure {
  /**
   * The outcome of the 3D Secure authentication request.
   */
  result: string;
}

export const IssuingAuthorizationThreeDSecureSchema: TypedSchema<IssuingAuthorizationThreeDSecure> = typed<IssuingAuthorizationThreeDSecure>(object({
  result: string(),
}));