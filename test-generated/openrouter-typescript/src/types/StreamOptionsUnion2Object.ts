import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { LogprobsUnion } from './LogprobsUnion';
import { LogprobsUnionSchema } from './LogprobsUnion';
export interface StreamOptionsUnion2Object {
  includeUsage?: LogprobsUnion;
}

export const StreamOptionsUnion2ObjectSchema: TypedSchema<StreamOptionsUnion2Object> = typed<StreamOptionsUnion2Object>(object({
  get includeUsage() { return optional(LogprobsUnionSchema) },
}));