import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { UnauthorizedResponseErrorData } from './UnauthorizedResponseErrorData';
import { UnauthorizedResponseErrorDataSchema } from './UnauthorizedResponseErrorData';
/**
 * Unauthorized - Authentication required or invalid credentials
 */
export interface UnauthorizedResponse {
  /**
   * Error data for UnauthorizedResponse
   */
  error: UnauthorizedResponseErrorData;
  userId?: string;
}

export const UnauthorizedResponseSchema: TypedSchema<UnauthorizedResponse> = typed<UnauthorizedResponse>(object({
  error: UnauthorizedResponseErrorDataSchema,
  userId: optional(string()),
}));