import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Image generation call is generating
 */
export interface OpenResponsesImageGenCallGenerating {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesImageGenCallGeneratingSchema: TypedSchema<OpenResponsesImageGenCallGenerating> = typed<OpenResponsesImageGenCallGenerating>(object({
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));