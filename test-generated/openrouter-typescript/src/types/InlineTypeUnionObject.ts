import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeUnionObjectContent } from './InlineTypeUnionObjectContent';
import { InlineTypeUnionObjectContentSchema } from './InlineTypeUnionObjectContent';
import type { InlineTypeUnionObjectRole } from './InlineTypeUnionObjectRole';
import { InlineTypeUnionObjectRoleSchema } from './InlineTypeUnionObjectRole';
export interface InlineTypeUnionObject {
  content: InlineTypeUnionObjectContent;
  role: InlineTypeUnionObjectRole;
  type?: string;
}

export const InlineTypeUnionObjectSchema: TypedSchema<InlineTypeUnionObject> = typed<InlineTypeUnionObject>(object({
  content: InlineTypeUnionObjectContentSchema,
  role: InlineTypeUnionObjectRoleSchema,
  type: optional(string()),
}));