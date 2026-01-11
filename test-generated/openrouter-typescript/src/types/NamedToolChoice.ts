import { TypedSchema, literal, object, typed } from '@speakeasy-api/tonic';

import type { FunctionProperty3 } from './FunctionProperty3';
import { FunctionProperty3Schema } from './FunctionProperty3';
export interface NamedToolChoice {
  function: FunctionProperty3;
  type: "function";
}

export const NamedToolChoiceSchema: TypedSchema<NamedToolChoice> = typed<NamedToolChoice>(object({
  function: FunctionProperty3Schema,
  type: literal("function"),
}));