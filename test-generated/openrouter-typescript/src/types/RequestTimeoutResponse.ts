import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { RequestTimeoutResponseErrorData } from './RequestTimeoutResponseErrorData';
import { RequestTimeoutResponseErrorDataSchema } from './RequestTimeoutResponseErrorData';
/**
 * Request Timeout - Operation exceeded time limit
 */
export interface RequestTimeoutResponse {
  /**
   * Error data for RequestTimeoutResponse
   */
  error: RequestTimeoutResponseErrorData;
  userId?: string;
}

export const RequestTimeoutResponseSchema: TypedSchema<RequestTimeoutResponse> = typed<RequestTimeoutResponse>(object({
  error: RequestTimeoutResponseErrorDataSchema,
  userId: optional(string()),
}));