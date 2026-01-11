import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { EdgeNetworkTimeoutResponseErrorData } from './EdgeNetworkTimeoutResponseErrorData';
import { EdgeNetworkTimeoutResponseErrorDataSchema } from './EdgeNetworkTimeoutResponseErrorData';
/**
 * Infrastructure Timeout - Provider request timed out at edge network
 */
export interface EdgeNetworkTimeoutResponse {
  /**
   * Error data for EdgeNetworkTimeoutResponse
   */
  error: EdgeNetworkTimeoutResponseErrorData;
  userId?: string;
}

export const EdgeNetworkTimeoutResponseSchema: TypedSchema<EdgeNetworkTimeoutResponse> = typed<EdgeNetworkTimeoutResponse>(object({
  error: EdgeNetworkTimeoutResponseErrorDataSchema,
  userId: optional(string()),
}));