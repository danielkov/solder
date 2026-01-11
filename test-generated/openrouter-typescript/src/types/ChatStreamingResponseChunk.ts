import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { DataProperty } from './DataProperty';
import { DataPropertySchema } from './DataProperty';
export interface ChatStreamingResponseChunk {
  data: DataProperty;
}

export const ChatStreamingResponseChunkSchema: TypedSchema<ChatStreamingResponseChunk> = typed<ChatStreamingResponseChunk>(object({
  data: DataPropertySchema,
}));