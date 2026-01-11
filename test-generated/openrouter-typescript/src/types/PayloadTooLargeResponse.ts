import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PayloadTooLargeResponseErrorData } from './PayloadTooLargeResponseErrorData';
import { PayloadTooLargeResponseErrorDataSchema } from './PayloadTooLargeResponseErrorData';
/**
 * Payload Too Large - Request payload exceeds size limits
 */
export interface PayloadTooLargeResponse {
  /**
   * Error data for PayloadTooLargeResponse
   */
  error: PayloadTooLargeResponseErrorData;
  userId?: string;
}

export const PayloadTooLargeResponseSchema: TypedSchema<PayloadTooLargeResponse> = typed<PayloadTooLargeResponse>(object({
  error: PayloadTooLargeResponseErrorDataSchema,
  userId: optional(string()),
}));