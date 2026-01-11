import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for EdgeNetworkTimeoutResponse
 */
export interface EdgeNetworkTimeoutResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const EdgeNetworkTimeoutResponseErrorDataSchema: TypedSchema<EdgeNetworkTimeoutResponseErrorData> = typed<EdgeNetworkTimeoutResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));