import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * GelatoSessionLastError
 *
 * Shows last VerificationSession error
 */
export interface GelatoSessionLastError {
  /**
   * A short machine-readable string giving the reason for the verification or user-session failure.
   */
  code?: string;
  /**
   * A message that explains the reason for verification or user-session failure.
   */
  reason?: string;
}

export const GelatoSessionLastErrorSchema: TypedSchema<GelatoSessionLastError> = typed<GelatoSessionLastError>(object({
  code: optional(string()),
  reason: optional(string()),
}));