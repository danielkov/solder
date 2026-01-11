import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface OpenAiResponsesIncompleteDetails {
  reason?: string;
}

export const OpenAiResponsesIncompleteDetailsSchema: TypedSchema<OpenAiResponsesIncompleteDetails> = typed<OpenAiResponsesIncompleteDetails>(object({
  reason: optional(string()),
}));