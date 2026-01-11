import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeUnion3 } from './InlineTypeUnion3';
import { InlineTypeUnion3Schema } from './InlineTypeUnion3';
import type { PartUnion } from './PartUnion';
import { PartUnionSchema } from './PartUnion';
/**
 * An output message item
 */
export interface ResponsesOutputMessage {
  content: Array<PartUnion>;
  id: string;
  role: string;
  status?: InlineTypeUnion3;
  type: string;
}

export const ResponsesOutputMessageSchema: TypedSchema<ResponsesOutputMessage> = typed<ResponsesOutputMessage>(object({
  content: array(PartUnionSchema),
  id: string(),
  role: string(),
  get status() { return optional(InlineTypeUnion3Schema) },
  type: string(),
}));