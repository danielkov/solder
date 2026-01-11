import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Text input content item
 */
export interface ResponseInputText {
  text: string;
  type: string;
}

export const ResponseInputTextSchema: TypedSchema<ResponseInputText> = typed<ResponseInputText>(object({
  text: string(),
  type: string(),
}));