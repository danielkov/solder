import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeUnionObject2Role } from './InlineTypeUnionObject2Role';
import { InlineTypeUnionObject2RoleSchema } from './InlineTypeUnionObject2Role';
import type { InlineTypeUnionObjectContentUnion } from './InlineTypeUnionObjectContentUnion';
import { InlineTypeUnionObjectContentUnionSchema } from './InlineTypeUnionObjectContentUnion';
export interface OpenResponsesInputMessageItem {
  content: Array<InlineTypeUnionObjectContentUnion>;
  id?: string;
  role: InlineTypeUnionObject2Role;
  type?: string;
}

export const OpenResponsesInputMessageItemSchema: TypedSchema<OpenResponsesInputMessageItem> = typed<OpenResponsesInputMessageItem>(object({
  content: array(InlineTypeUnionObjectContentUnionSchema),
  id: optional(string()),
  role: InlineTypeUnionObject2RoleSchema,
  type: optional(string()),
}));