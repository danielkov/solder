import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface CancelOrderRequest {
  /**
   * Reason for cancellation
   */
  reason?: string;
}

export const CancelOrderRequestSchema: TypedSchema<CancelOrderRequest> = typed<CancelOrderRequest>(object({
  reason: optional(string()),
}));