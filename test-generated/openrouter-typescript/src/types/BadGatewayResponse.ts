import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BadGatewayResponseErrorData } from './BadGatewayResponseErrorData';
import { BadGatewayResponseErrorDataSchema } from './BadGatewayResponseErrorData';
/**
 * Bad Gateway - Provider/upstream API failure
 */
export interface BadGatewayResponse {
  /**
   * Error data for BadGatewayResponse
   */
  error: BadGatewayResponseErrorData;
  userId?: string;
}

export const BadGatewayResponseSchema: TypedSchema<BadGatewayResponse> = typed<BadGatewayResponse>(object({
  error: BadGatewayResponseErrorDataSchema,
  userId: optional(string()),
}));