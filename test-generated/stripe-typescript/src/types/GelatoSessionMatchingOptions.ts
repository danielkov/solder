import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * GelatoSessionMatchingOptions
 *
 * 
 */
export interface GelatoSessionMatchingOptions {
  /**
   * Strictness of the DOB matching policy to apply.
   */
  dob?: string;
  /**
   * Strictness of the name matching policy to apply.
   */
  name?: string;
}

export const GelatoSessionMatchingOptionsSchema: TypedSchema<GelatoSessionMatchingOptions> = typed<GelatoSessionMatchingOptions>(object({
  dob: optional(string()),
  name: optional(string()),
}));