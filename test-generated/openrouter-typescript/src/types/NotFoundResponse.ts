import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { NotFoundResponseErrorData } from './NotFoundResponseErrorData';
import { NotFoundResponseErrorDataSchema } from './NotFoundResponseErrorData';
/**
 * Not Found - Resource does not exist
 */
export interface NotFoundResponse {
  /**
   * Error data for NotFoundResponse
   */
  error: NotFoundResponseErrorData;
  userId?: string;
}

export const NotFoundResponseSchema: TypedSchema<NotFoundResponse> = typed<NotFoundResponse>(object({
  error: NotFoundResponseErrorDataSchema,
  userId: optional(string()),
}));