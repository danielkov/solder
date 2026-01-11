import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesAnnotation } from './OpenAiResponsesAnnotation';
import { OpenAiResponsesAnnotationSchema } from './OpenAiResponsesAnnotation';
export interface ResponseOutputText {
  annotations?: Array<OpenAiResponsesAnnotation>;
  text: string;
  type: string;
}

export const ResponseOutputTextSchema: TypedSchema<ResponseOutputText> = typed<ResponseOutputText>(object({
  get annotations() { return optional(array(OpenAiResponsesAnnotationSchema)) },
  text: string(),
  type: string(),
}));