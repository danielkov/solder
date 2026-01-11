import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BadRequestResponseErrorData } from './BadRequestResponseErrorData';
import { BadRequestResponseErrorDataSchema } from './BadRequestResponseErrorData';
/**
 * Bad Request - Invalid request parameters or malformed input
 */
export interface BadRequestResponse {
  /**
   * Error data for BadRequestResponse
   */
  error: BadRequestResponseErrorData;
  userId?: string;
}

export const BadRequestResponseSchema: TypedSchema<BadRequestResponse> = typed<BadRequestResponse>(object({
  error: BadRequestResponseErrorDataSchema,
  userId: optional(string()),
}));