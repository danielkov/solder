import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { CreateCoinbaseChargeResponseData } from './CreateCoinbaseChargeResponseData';
import { CreateCoinbaseChargeResponseDataSchema } from './CreateCoinbaseChargeResponseData';
export interface CreateCoinbaseChargeResponse {
  data: CreateCoinbaseChargeResponseData;
}

export const CreateCoinbaseChargeResponseSchema: TypedSchema<CreateCoinbaseChargeResponse> = typed<CreateCoinbaseChargeResponse>(object({
  data: CreateCoinbaseChargeResponseDataSchema,
}));