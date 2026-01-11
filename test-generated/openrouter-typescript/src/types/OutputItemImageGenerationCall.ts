import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ImageGenerationStatus } from './ImageGenerationStatus';
import { ImageGenerationStatusSchema } from './ImageGenerationStatus';
export interface OutputItemImageGenerationCall {
  id: string;
  result?: string;
  status: ImageGenerationStatus;
  type: string;
}

export const OutputItemImageGenerationCallSchema: TypedSchema<OutputItemImageGenerationCall> = typed<OutputItemImageGenerationCall>(object({
  id: string(),
  result: optional(string()),
  status: ImageGenerationStatusSchema,
  type: string(),
}));