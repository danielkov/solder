import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { GetKeyResponseData } from './GetKeyResponseData';
import { GetKeyResponseDataSchema } from './GetKeyResponseData';
export interface GetKeyResponse {
  /**
   * The API key information
   */
  data: GetKeyResponseData;
}

export const GetKeyResponseSchema: TypedSchema<GetKeyResponse> = typed<GetKeyResponse>(object({
  data: GetKeyResponseDataSchema,
}));