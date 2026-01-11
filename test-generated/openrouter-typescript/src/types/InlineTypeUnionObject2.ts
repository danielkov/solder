import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeUnionObject2Role } from './InlineTypeUnionObject2Role';
import { InlineTypeUnionObject2RoleSchema } from './InlineTypeUnionObject2Role';
import type { InlineTypeUnionObjectContentUnion } from './InlineTypeUnionObjectContentUnion';
import { InlineTypeUnionObjectContentUnionSchema } from './InlineTypeUnionObjectContentUnion';
export interface InlineTypeUnionObject2 {
  content: Array<InlineTypeUnionObjectContentUnion>;
  id: string;
  role: InlineTypeUnionObject2Role;
  type?: string;
}

export const InlineTypeUnionObject2Schema: TypedSchema<InlineTypeUnionObject2> = typed<InlineTypeUnionObject2>(object({
  content: array(InlineTypeUnionObjectContentUnionSchema),
  id: string(),
  role: InlineTypeUnionObject2RoleSchema,
  type: optional(string()),
}));