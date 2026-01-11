import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for ProviderOverloadedResponse
 */
export interface ProviderOverloadedResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const ProviderOverloadedResponseErrorDataSchema: TypedSchema<ProviderOverloadedResponseErrorData> = typed<ProviderOverloadedResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));