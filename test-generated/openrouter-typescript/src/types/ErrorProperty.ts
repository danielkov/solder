import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CodeUnion } from './CodeUnion';
import { CodeUnionSchema } from './CodeUnion';
import type { ReasoningUnion } from './ReasoningUnion';
import { ReasoningUnionSchema } from './ReasoningUnion';
export interface ErrorProperty {
  code: CodeUnion;
  message: string;
  param?: ReasoningUnion;
  type?: ReasoningUnion;
}

export const ErrorPropertySchema: TypedSchema<ErrorProperty> = typed<ErrorProperty>(object({
  code: CodeUnionSchema,
  message: string(),
  get param() { return optional(ReasoningUnionSchema) },
  get type() { return optional(ReasoningUnionSchema) },
}));