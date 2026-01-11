import { TypedSchema, literal, object, typed } from '@speakeasy-api/tonic';

import type { JsonSchemaConfig } from './JsonSchemaConfig';
import { JsonSchemaConfigSchema } from './JsonSchemaConfig';
export interface ResponseFormatJsonSchema {
  jsonSchema: JsonSchemaConfig;
  type: "json_schema";
}

export const ResponseFormatJsonSchemaSchema: TypedSchema<ResponseFormatJsonSchema> = typed<ResponseFormatJsonSchema>(object({
  jsonSchema: JsonSchemaConfigSchema,
  type: literal("json_schema"),
}));