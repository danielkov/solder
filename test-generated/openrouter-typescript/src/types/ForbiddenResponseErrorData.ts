import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for ForbiddenResponse
 */
export interface ForbiddenResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const ForbiddenResponseErrorDataSchema: TypedSchema<ForbiddenResponseErrorData> = typed<ForbiddenResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));