import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ForbiddenResponseErrorData } from './ForbiddenResponseErrorData';
import { ForbiddenResponseErrorDataSchema } from './ForbiddenResponseErrorData';
/**
 * Forbidden - Authentication successful but insufficient permissions
 */
export interface ForbiddenResponse {
  /**
   * Error data for ForbiddenResponse
   */
  error: ForbiddenResponseErrorData;
  userId?: string;
}

export const ForbiddenResponseSchema: TypedSchema<ForbiddenResponse> = typed<ForbiddenResponse>(object({
  error: ForbiddenResponseErrorDataSchema,
  userId: optional(string()),
}));