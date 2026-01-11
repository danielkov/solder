import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { UnprocessableEntityResponseErrorData } from './UnprocessableEntityResponseErrorData';
import { UnprocessableEntityResponseErrorDataSchema } from './UnprocessableEntityResponseErrorData';
/**
 * Unprocessable Entity - Semantic validation failure
 */
export interface UnprocessableEntityResponse {
  /**
   * Error data for UnprocessableEntityResponse
   */
  error: UnprocessableEntityResponseErrorData;
  userId?: string;
}

export const UnprocessableEntityResponseSchema: TypedSchema<UnprocessableEntityResponse> = typed<UnprocessableEntityResponse>(object({
  error: UnprocessableEntityResponseErrorDataSchema,
  userId: optional(string()),
}));