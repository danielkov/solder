import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InternalServerResponseErrorData } from './InternalServerResponseErrorData';
import { InternalServerResponseErrorDataSchema } from './InternalServerResponseErrorData';
/**
 * Internal Server Error - Unexpected server error
 */
export interface InternalServerResponse {
  /**
   * Error data for InternalServerResponse
   */
  error: InternalServerResponseErrorData;
  userId?: string;
}

export const InternalServerResponseSchema: TypedSchema<InternalServerResponse> = typed<InternalServerResponse>(object({
  error: InternalServerResponseErrorDataSchema,
  userId: optional(string()),
}));