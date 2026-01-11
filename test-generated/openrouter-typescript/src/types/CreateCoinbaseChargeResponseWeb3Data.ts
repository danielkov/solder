import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { CreateCoinbaseChargeResponseTransferIntent } from './CreateCoinbaseChargeResponseTransferIntent';
import { CreateCoinbaseChargeResponseTransferIntentSchema } from './CreateCoinbaseChargeResponseTransferIntent';
export interface CreateCoinbaseChargeResponseWeb3Data {
  transferIntent: CreateCoinbaseChargeResponseTransferIntent;
}

export const CreateCoinbaseChargeResponseWeb3DataSchema: TypedSchema<CreateCoinbaseChargeResponseWeb3Data> = typed<CreateCoinbaseChargeResponseWeb3Data>(object({
  transferIntent: CreateCoinbaseChargeResponseTransferIntentSchema,
}));