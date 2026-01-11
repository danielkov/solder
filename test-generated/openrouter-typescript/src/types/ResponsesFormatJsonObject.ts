import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * JSON object response format
 */
export interface ResponsesFormatJsonObject {
  type: string;
}

export const ResponsesFormatJsonObjectSchema: TypedSchema<ResponsesFormatJsonObject> = typed<ResponsesFormatJsonObject>(object({
  type: string(),
}));