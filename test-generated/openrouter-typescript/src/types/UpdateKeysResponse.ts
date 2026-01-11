import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { UpdateKeysResponseData } from './UpdateKeysResponseData';
import { UpdateKeysResponseDataSchema } from './UpdateKeysResponseData';
export interface UpdateKeysResponse {
  /**
   * The updated API key information
   */
  data: UpdateKeysResponseData;
}

export const UpdateKeysResponseSchema: TypedSchema<UpdateKeysResponse> = typed<UpdateKeysResponse>(object({
  data: UpdateKeysResponseDataSchema,
}));