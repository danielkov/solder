import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ServiceUnavailableResponseErrorData } from './ServiceUnavailableResponseErrorData';
import { ServiceUnavailableResponseErrorDataSchema } from './ServiceUnavailableResponseErrorData';
/**
 * Service Unavailable - Service temporarily unavailable
 */
export interface ServiceUnavailableResponse {
  /**
   * Error data for ServiceUnavailableResponse
   */
  error: ServiceUnavailableResponseErrorData;
  userId?: string;
}

export const ServiceUnavailableResponseSchema: TypedSchema<ServiceUnavailableResponse> = typed<ServiceUnavailableResponse>(object({
  error: ServiceUnavailableResponseErrorDataSchema,
  userId: optional(string()),
}));