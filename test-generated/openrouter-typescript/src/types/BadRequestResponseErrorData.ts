import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for BadRequestResponse
 */
export interface BadRequestResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const BadRequestResponseErrorDataSchema: TypedSchema<BadRequestResponseErrorData> = typed<BadRequestResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));