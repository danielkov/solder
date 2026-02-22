import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Plain text response format
 */
export interface ResponsesFormatText {
  type: string;
}

export const ResponsesFormatTextSchema: TypedSchema<ResponsesFormatText> = typed<ResponsesFormatText>(object({ type: string() }));
