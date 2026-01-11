import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ProviderOverloadedResponseErrorData } from './ProviderOverloadedResponseErrorData';
import { ProviderOverloadedResponseErrorDataSchema } from './ProviderOverloadedResponseErrorData';
/**
 * Provider Overloaded - Provider is temporarily overloaded
 */
export interface ProviderOverloadedResponse {
  /**
   * Error data for ProviderOverloadedResponse
   */
  error: ProviderOverloadedResponseErrorData;
  userId?: string;
}

export const ProviderOverloadedResponseSchema: TypedSchema<ProviderOverloadedResponse> = typed<ProviderOverloadedResponse>(object({
  error: ProviderOverloadedResponseErrorDataSchema,
  userId: optional(string()),
}));