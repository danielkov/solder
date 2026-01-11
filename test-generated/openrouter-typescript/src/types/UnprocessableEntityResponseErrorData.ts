import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for UnprocessableEntityResponse
 */
export interface UnprocessableEntityResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const UnprocessableEntityResponseErrorDataSchema: TypedSchema<UnprocessableEntityResponseErrorData> = typed<UnprocessableEntityResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));