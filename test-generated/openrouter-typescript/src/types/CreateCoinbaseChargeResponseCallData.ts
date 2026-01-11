import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface CreateCoinbaseChargeResponseCallData {
  deadline: string;
  feeAmount: string;
  id: string;
  operator: string;
  prefix: string;
  recipient: string;
  recipientAmount: string;
  recipientCurrency: string;
  refundDestination: string;
  signature: string;
}

export const CreateCoinbaseChargeResponseCallDataSchema: TypedSchema<CreateCoinbaseChargeResponseCallData> = typed<CreateCoinbaseChargeResponseCallData>(object({
  deadline: string(),
  feeAmount: string(),
  id: string(),
  operator: string(),
  prefix: string(),
  recipient: string(),
  recipientAmount: string(),
  recipientCurrency: string(),
  refundDestination: string(),
  signature: string(),
}));