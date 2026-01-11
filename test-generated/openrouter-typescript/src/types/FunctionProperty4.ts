import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LogprobsUnion } from './LogprobsUnion';
import { LogprobsUnionSchema } from './LogprobsUnion';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
export interface FunctionProperty4 {
  description?: string;
  name: string;
  parameters?: MetadataProperty;
  strict?: LogprobsUnion;
}

export const FunctionProperty4Schema: TypedSchema<FunctionProperty4> = typed<FunctionProperty4>(object({
  description: optional(string()),
  name: string(),
  get parameters() { return optional(MetadataPropertySchema) },
  get strict() { return optional(LogprobsUnionSchema) },
}));