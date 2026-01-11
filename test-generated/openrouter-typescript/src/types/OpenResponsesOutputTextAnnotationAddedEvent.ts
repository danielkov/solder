import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesAnnotation } from './OpenAiResponsesAnnotation';
import { OpenAiResponsesAnnotationSchema } from './OpenAiResponsesAnnotation';
/**
 * Event emitted when a text annotation is added to output
 */
export interface OpenResponsesOutputTextAnnotationAddedEvent {
  annotation: OpenAiResponsesAnnotation;
  annotationIndex: number;
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesOutputTextAnnotationAddedEventSchema: TypedSchema<OpenResponsesOutputTextAnnotationAddedEvent> = typed<OpenResponsesOutputTextAnnotationAddedEvent>(object({
  annotation: OpenAiResponsesAnnotationSchema,
  annotationIndex: number(),
  contentIndex: number(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));