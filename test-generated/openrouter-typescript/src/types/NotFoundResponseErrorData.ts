import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for NotFoundResponse
 */
export interface NotFoundResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const NotFoundResponseErrorDataSchema: TypedSchema<NotFoundResponseErrorData> = typed<NotFoundResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));