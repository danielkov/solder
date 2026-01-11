import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { CreateCoinbaseChargeResponseCallData } from './CreateCoinbaseChargeResponseCallData';
import { CreateCoinbaseChargeResponseCallDataSchema } from './CreateCoinbaseChargeResponseCallData';
import type { CreateCoinbaseChargeResponseMetadata } from './CreateCoinbaseChargeResponseMetadata';
import { CreateCoinbaseChargeResponseMetadataSchema } from './CreateCoinbaseChargeResponseMetadata';
export interface CreateCoinbaseChargeResponseTransferIntent {
  callData: CreateCoinbaseChargeResponseCallData;
  metadata: CreateCoinbaseChargeResponseMetadata;
}

export const CreateCoinbaseChargeResponseTransferIntentSchema: TypedSchema<CreateCoinbaseChargeResponseTransferIntent> = typed<CreateCoinbaseChargeResponseTransferIntent>(object({
  callData: CreateCoinbaseChargeResponseCallDataSchema,
  metadata: CreateCoinbaseChargeResponseMetadataSchema,
}));