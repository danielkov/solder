import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * JSON schema constrained response format
 */
export interface ResponsesFormatTextJsonSchemaConfig {
  description?: string;
  name: string;
  schema: MetadataProperty;
  strict?: boolean;
  type: string;
}

export const ResponsesFormatTextJsonSchemaConfigSchema: TypedSchema<ResponsesFormatTextJsonSchemaConfig> = typed<ResponsesFormatTextJsonSchemaConfig>(object({
  description: optional(string()),
  name: string(),
  schema: MetadataPropertySchema,
  strict: optional(boolean()),
  type: string(),
}));