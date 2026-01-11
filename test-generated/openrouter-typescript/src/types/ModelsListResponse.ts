import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { ModelsListResponseData } from './ModelsListResponseData';
import { ModelsListResponseDataSchema } from './ModelsListResponseData';
/**
 * List of available models
 */
export interface ModelsListResponse {
  /**
   * List of available models
   */
  data: ModelsListResponseData;
}

export const ModelsListResponseSchema: TypedSchema<ModelsListResponse> = typed<ModelsListResponse>(object({
  data: ModelsListResponseDataSchema,
}));