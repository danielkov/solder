import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * SigmaScheduledQueryRunError
 *
 * 
 */
export interface SigmaScheduledQueryRunError {
  /**
   * Information about the run failure.
   */
  message: string;
}

export const SigmaScheduledQueryRunErrorSchema: TypedSchema<SigmaScheduledQueryRunError> = typed<SigmaScheduledQueryRunError>(object({
  message: string(),
}));