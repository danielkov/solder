import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * GelatoSessionPhoneOptions
 *
 * 
 */
export interface GelatoSessionPhoneOptions {
  /**
   * Request one time password verification of `provided_details.phone`.
   */
  requireVerification?: boolean;
}

export const GelatoSessionPhoneOptionsSchema: TypedSchema<GelatoSessionPhoneOptions> = typed<GelatoSessionPhoneOptions>(object({
  requireVerification: optional(boolean()),
}));