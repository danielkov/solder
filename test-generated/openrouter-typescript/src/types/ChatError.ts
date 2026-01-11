import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { ErrorProperty } from './ErrorProperty';
import { ErrorPropertySchema } from './ErrorProperty';
export interface ChatError {
  error: ErrorProperty;
}

export const ChatErrorSchema: TypedSchema<ChatError> = typed<ChatError>(object({
  error: ErrorPropertySchema,
}));