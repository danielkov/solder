import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ImageGenerationStatus } from './ImageGenerationStatus';
import { ImageGenerationStatusSchema } from './ImageGenerationStatus';
export interface ResponsesImageGenerationCall {
  id: string;
  result?: string;
  status: ImageGenerationStatus;
  type: string;
}

export const ResponsesImageGenerationCallSchema: TypedSchema<ResponsesImageGenerationCall> = typed<ResponsesImageGenerationCall>(object({
  id: string(),
  result: optional(string()),
  status: ImageGenerationStatusSchema,
  type: string(),
}));