import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface ReasoningTextContent {
  text: string;
  type: string;
}

export const ReasoningTextContentSchema: TypedSchema<ReasoningTextContent> = typed<ReasoningTextContent>(object({
  text: string(),
  type: string(),
}));