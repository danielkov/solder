import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for BadGatewayResponse
 */
export interface BadGatewayResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const BadGatewayResponseErrorDataSchema: TypedSchema<BadGatewayResponseErrorData> = typed<BadGatewayResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));