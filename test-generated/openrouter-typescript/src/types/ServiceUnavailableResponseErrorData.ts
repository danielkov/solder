import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for ServiceUnavailableResponse
 */
export interface ServiceUnavailableResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const ServiceUnavailableResponseErrorDataSchema: TypedSchema<ServiceUnavailableResponseErrorData> = typed<ServiceUnavailableResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));