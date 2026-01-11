import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ResponseFormatTextConfig } from './ResponseFormatTextConfig';
import { ResponseFormatTextConfigSchema } from './ResponseFormatTextConfig';
/**
 * Text output configuration including format and verbosity
 */
export interface OpenResponsesResponseText {
  /**
   * Text response format configuration
   */
  format?: ResponseFormatTextConfig;
  verbosity?: string;
}

export const OpenResponsesResponseTextSchema: TypedSchema<OpenResponsesResponseText> = typed<OpenResponsesResponseText>(object({
  get format() { return optional(ResponseFormatTextConfigSchema) },
  verbosity: optional(string()),
}));