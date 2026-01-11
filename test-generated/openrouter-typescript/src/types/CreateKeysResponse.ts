import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { CreateKeysResponseData } from './CreateKeysResponseData';
import { CreateKeysResponseDataSchema } from './CreateKeysResponseData';
export interface CreateKeysResponse {
  /**
   * The created API key information
   */
  data: CreateKeysResponseData;
  /**
   * The actual API key string (only shown once)
   */
  key: string;
}

export const CreateKeysResponseSchema: TypedSchema<CreateKeysResponse> = typed<CreateKeysResponse>(object({
  data: CreateKeysResponseDataSchema,
  key: string(),
}));