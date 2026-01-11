import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * Error data for PayloadTooLargeResponse
 */
export interface PayloadTooLargeResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export const PayloadTooLargeResponseErrorDataSchema: TypedSchema<PayloadTooLargeResponseErrorData> = typed<PayloadTooLargeResponseErrorData>(object({
  code: number(),
  message: string(),
  get metadata() { return optional(MetadataPropertySchema) },
}));