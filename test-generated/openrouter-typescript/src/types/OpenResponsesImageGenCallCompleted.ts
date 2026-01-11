import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Image generation call completed
 */
export interface OpenResponsesImageGenCallCompleted {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesImageGenCallCompletedSchema: TypedSchema<OpenResponsesImageGenCallCompleted> = typed<OpenResponsesImageGenCallCompleted>(object({
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));