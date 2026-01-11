import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for UnauthorizedResponse
 */
export interface UnauthorizedResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const UnauthorizedResponseErrorDataSchema: TypedSchema<UnauthorizedResponseErrorData> = typed<UnauthorizedResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));