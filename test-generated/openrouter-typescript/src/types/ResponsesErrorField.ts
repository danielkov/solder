import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Error information returned from the API
 */
export interface ResponsesErrorField {
  code: string;
  message: string;
}

export const ResponsesErrorFieldSchema: TypedSchema<ResponsesErrorField> = typed<ResponsesErrorField>(object({
  code: string(),
  message: string(),
}));