import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * GelatoSessionEmailOptions
 *
 * 
 */
export interface GelatoSessionEmailOptions {
  /**
   * Request one time password verification of `provided_details.email`.
   */
  requireVerification?: boolean;
}

export const GelatoSessionEmailOptionsSchema: TypedSchema<GelatoSessionEmailOptions> = typed<GelatoSessionEmailOptions>(object({
  requireVerification: optional(boolean()),
}));