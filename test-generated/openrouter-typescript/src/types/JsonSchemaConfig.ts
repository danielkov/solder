import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LogprobsUnion } from './LogprobsUnion';
import { LogprobsUnionSchema } from './LogprobsUnion';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
export interface JsonSchemaConfig {
  description?: string;
  name: string;
  schema?: MetadataProperty;
  strict?: LogprobsUnion;
}

export const JsonSchemaConfigSchema: TypedSchema<JsonSchemaConfig> = typed<JsonSchemaConfig>(object({
  description: optional(string()),
  name: string(),
  get schema() { return optional(MetadataPropertySchema) },
  get strict() { return optional(LogprobsUnionSchema) },
}));