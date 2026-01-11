import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeUnionObjectContent } from './InlineTypeUnionObjectContent';
import { InlineTypeUnionObjectContentSchema } from './InlineTypeUnionObjectContent';
import type { InlineTypeUnionObjectRole } from './InlineTypeUnionObjectRole';
import { InlineTypeUnionObjectRoleSchema } from './InlineTypeUnionObjectRole';
export interface OpenResponsesEasyInputMessage {
  content: InlineTypeUnionObjectContent;
  role: InlineTypeUnionObjectRole;
  type?: string;
}

export const OpenResponsesEasyInputMessageSchema: TypedSchema<OpenResponsesEasyInputMessage> = typed<OpenResponsesEasyInputMessage>(object({
  content: InlineTypeUnionObjectContentSchema,
  role: InlineTypeUnionObjectRoleSchema,
  type: optional(string()),
}));