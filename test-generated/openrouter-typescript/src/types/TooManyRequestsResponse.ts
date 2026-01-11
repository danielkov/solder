import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TooManyRequestsResponseErrorData } from './TooManyRequestsResponseErrorData';
import { TooManyRequestsResponseErrorDataSchema } from './TooManyRequestsResponseErrorData';
/**
 * Too Many Requests - Rate limit exceeded
 */
export interface TooManyRequestsResponse {
  /**
   * Error data for TooManyRequestsResponse
   */
  error: TooManyRequestsResponseErrorData;
  userId?: string;
}

export const TooManyRequestsResponseSchema: TypedSchema<TooManyRequestsResponse> = typed<TooManyRequestsResponse>(object({
  error: TooManyRequestsResponseErrorDataSchema,
  userId: optional(string()),
}));