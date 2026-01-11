import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { InlineTypeObject5Type } from './InlineTypeObject5Type';
import { InlineTypeObject5TypeSchema } from './InlineTypeObject5Type';
export interface InlineTypeObject5 {
  type: InlineTypeObject5Type;
}

export const InlineTypeObject5Schema: TypedSchema<InlineTypeObject5> = typed<InlineTypeObject5>(object({
  type: InlineTypeObject5TypeSchema,
}));