import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * GelatoIdNumberReportError
 *
 * 
 */
export interface GelatoIdNumberReportError {
  /**
   * A short machine-readable string giving the reason for the verification failure.
   */
  code?: string;
  /**
   * A human-readable message giving the reason for the failure. These messages can be shown to your users.
   */
  reason?: string;
}

export const GelatoIdNumberReportErrorSchema: TypedSchema<GelatoIdNumberReportError> = typed<GelatoIdNumberReportError>(object({
  code: optional(string()),
  reason: optional(string()),
}));