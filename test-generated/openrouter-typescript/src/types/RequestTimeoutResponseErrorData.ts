import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for RequestTimeoutResponse
 */
export interface RequestTimeoutResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const RequestTimeoutResponseErrorDataSchema: TypedSchema<RequestTimeoutResponseErrorData> = typed<RequestTimeoutResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));