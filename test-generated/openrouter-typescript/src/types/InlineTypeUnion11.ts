import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesAnnotation } from './OpenAiResponsesAnnotation';
import { OpenAiResponsesAnnotationSchema } from './OpenAiResponsesAnnotation';
/**
 * Event emitted when a text annotation is added to output
 */
export interface InlineTypeUnion11 {
  annotation: OpenAiResponsesAnnotation;
  annotationIndex: number;
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const InlineTypeUnion11Schema: TypedSchema<InlineTypeUnion11> = typed<InlineTypeUnion11>(object({
  annotation: OpenAiResponsesAnnotationSchema,
  annotationIndex: number(),
  contentIndex: number(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));