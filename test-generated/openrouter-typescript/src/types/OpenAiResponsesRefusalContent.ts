import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface OpenAiResponsesRefusalContent {
  refusal: string;
  type: string;
}

export const OpenAiResponsesRefusalContentSchema: TypedSchema<OpenAiResponsesRefusalContent> = typed<OpenAiResponsesRefusalContent>(object({
  refusal: string(),
  type: string(),
}));