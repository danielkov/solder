import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for TooManyRequestsResponse
 */
export interface TooManyRequestsResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const TooManyRequestsResponseErrorDataSchema: TypedSchema<TooManyRequestsResponseErrorData> = typed<TooManyRequestsResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));