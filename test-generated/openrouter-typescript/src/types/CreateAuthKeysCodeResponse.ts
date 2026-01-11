import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { CreateAuthKeysCodeResponseData } from './CreateAuthKeysCodeResponseData';
import { CreateAuthKeysCodeResponseDataSchema } from './CreateAuthKeysCodeResponseData';
export interface CreateAuthKeysCodeResponse {
  /**
   * Auth code data
   */
  data: CreateAuthKeysCodeResponseData;
}

export const CreateAuthKeysCodeResponseSchema: TypedSchema<CreateAuthKeysCodeResponse> = typed<CreateAuthKeysCodeResponse>(object({
  data: CreateAuthKeysCodeResponseDataSchema,
}));