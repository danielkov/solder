import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { GetCurrentKeyResponseData } from './GetCurrentKeyResponseData';
import { GetCurrentKeyResponseDataSchema } from './GetCurrentKeyResponseData';
export interface GetCurrentKeyResponse {
  /**
   * Current API key information
   */
  data: GetCurrentKeyResponseData;
}

export const GetCurrentKeyResponseSchema: TypedSchema<GetCurrentKeyResponse> = typed<GetCurrentKeyResponse>(object({
  data: GetCurrentKeyResponseDataSchema,
}));