import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
export interface OpenAiResponsesImageGenCallGenerating {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenAiResponsesImageGenCallGeneratingSchema: TypedSchema<OpenAiResponsesImageGenCallGenerating> = typed<OpenAiResponsesImageGenCallGenerating>(object({
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));