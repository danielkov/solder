import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Image generation call with partial image
 */
export interface OpenResponsesImageGenCallPartialImage {
  itemId: string;
  outputIndex: number;
  partialImageB64: string;
  partialImageIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesImageGenCallPartialImageSchema: TypedSchema<OpenResponsesImageGenCallPartialImage> = typed<OpenResponsesImageGenCallPartialImage>(object({
  itemId: string(),
  outputIndex: number(),
  partialImageB64: string(),
  partialImageIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));