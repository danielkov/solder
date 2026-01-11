import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
export interface OpenAiResponsesImageGenCallPartialImage {
  itemId: string;
  outputIndex: number;
  partialImageB64: string;
  partialImageIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenAiResponsesImageGenCallPartialImageSchema: TypedSchema<OpenAiResponsesImageGenCallPartialImage> = typed<OpenAiResponsesImageGenCallPartialImage>(object({
  itemId: string(),
  outputIndex: number(),
  partialImageB64: string(),
  partialImageIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));