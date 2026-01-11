import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for InternalServerResponse
 */
export interface InternalServerResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const InternalServerResponseErrorDataSchema: TypedSchema<InternalServerResponseErrorData> = typed<InternalServerResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));