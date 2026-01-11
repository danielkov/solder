import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * three_d_secure_usage
 *
 * 
 */
export interface ThreeDSecureUsage {
  /**
   * Whether 3D Secure is supported on this card.
   */
  supported: boolean;
}

export const ThreeDSecureUsageSchema: TypedSchema<ThreeDSecureUsage> = typed<ThreeDSecureUsage>(object({
  supported: boolean(),
}));