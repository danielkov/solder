import { TypedSchema, literal, object, typed } from '@speakeasy-api/tonic';

import type { FunctionProperty4 } from './FunctionProperty4';
import { FunctionProperty4Schema } from './FunctionProperty4';
export interface ToolDefinitionJson {
  function: FunctionProperty4;
  type: "function";
}

export const ToolDefinitionJsonSchema: TypedSchema<ToolDefinitionJson> = typed<ToolDefinitionJson>(object({
  function: FunctionProperty4Schema,
  type: literal("function"),
}));