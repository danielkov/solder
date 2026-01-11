import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Image generation call in progress
 */
export interface OpenResponsesImageGenCallInProgress {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesImageGenCallInProgressSchema: TypedSchema<OpenResponsesImageGenCallInProgress> = typed<OpenResponsesImageGenCallInProgress>(object({
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));