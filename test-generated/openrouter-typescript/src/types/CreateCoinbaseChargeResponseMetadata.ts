import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
export interface CreateCoinbaseChargeResponseMetadata {
  chainId: number;
  contractAddress: string;
  sender: string;
}

export const CreateCoinbaseChargeResponseMetadataSchema: TypedSchema<CreateCoinbaseChargeResponseMetadata> = typed<CreateCoinbaseChargeResponseMetadata>(object({
  chainId: number(),
  contractAddress: string(),
  sender: string(),
}));