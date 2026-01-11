import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
export interface OpenAiResponsesImageGenCallCompleted {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenAiResponsesImageGenCallCompletedSchema: TypedSchema<OpenAiResponsesImageGenCallCompleted> = typed<OpenAiResponsesImageGenCallCompleted>(object({
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));