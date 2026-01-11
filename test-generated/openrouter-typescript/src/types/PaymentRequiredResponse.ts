import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentRequiredResponseErrorData } from './PaymentRequiredResponseErrorData';
import { PaymentRequiredResponseErrorDataSchema } from './PaymentRequiredResponseErrorData';
/**
 * Payment Required - Insufficient credits or quota to complete request
 */
export interface PaymentRequiredResponse {
  /**
   * Error data for PaymentRequiredResponse
   */
  error: PaymentRequiredResponseErrorData;
  userId?: string;
}

export const PaymentRequiredResponseSchema: TypedSchema<PaymentRequiredResponse> = typed<PaymentRequiredResponse>(object({
  error: PaymentRequiredResponseErrorDataSchema,
  userId: optional(string()),
}));