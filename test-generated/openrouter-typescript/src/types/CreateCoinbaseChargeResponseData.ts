import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { CreateCoinbaseChargeResponseWeb3Data } from './CreateCoinbaseChargeResponseWeb3Data';
import { CreateCoinbaseChargeResponseWeb3DataSchema } from './CreateCoinbaseChargeResponseWeb3Data';
export interface CreateCoinbaseChargeResponseData {
  createdAt: string;
  expiresAt: string;
  id: string;
  web3Data: CreateCoinbaseChargeResponseWeb3Data;
}

export const CreateCoinbaseChargeResponseDataSchema: TypedSchema<CreateCoinbaseChargeResponseData> = typed<CreateCoinbaseChargeResponseData>(object({
  createdAt: string(),
  expiresAt: string(),
  id: string(),
  web3Data: CreateCoinbaseChargeResponseWeb3DataSchema,
}));