import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { GetGenerationResponseData } from './GetGenerationResponseData';
import { GetGenerationResponseDataSchema } from './GetGenerationResponseData';
/**
 * Generation response
 */
export interface GetGenerationResponse {
  /**
   * Generation data
   */
  data: GetGenerationResponseData;
}

export const GetGenerationResponseSchema: TypedSchema<GetGenerationResponse> = typed<GetGenerationResponse>(object({
  data: GetGenerationResponseDataSchema,
}));