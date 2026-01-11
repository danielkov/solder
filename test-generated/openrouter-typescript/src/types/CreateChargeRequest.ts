import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Create a Coinbase charge for crypto payment
 */
export interface CreateChargeRequest {
  amount: number;
  chainId: number;
  sender: string;
}

export const CreateChargeRequestSchema: TypedSchema<CreateChargeRequest> = typed<CreateChargeRequest>(object({
  amount: number(),
  chainId: number(),
  sender: string(),
}));