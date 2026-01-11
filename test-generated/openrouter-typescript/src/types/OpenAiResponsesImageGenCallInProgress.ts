import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
export interface OpenAiResponsesImageGenCallInProgress {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenAiResponsesImageGenCallInProgressSchema: TypedSchema<OpenAiResponsesImageGenCallInProgress> = typed<OpenAiResponsesImageGenCallInProgress>(object({
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));