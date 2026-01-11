import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * verification_session_redaction
 *
 * 
 */
export interface VerificationSessionRedaction {
  /**
   * Indicates whether this object and its related objects have been redacted or not.
   */
  status: string;
}

export const VerificationSessionRedactionSchema: TypedSchema<VerificationSessionRedaction> = typed<VerificationSessionRedaction>(object({
  status: string(),
}));