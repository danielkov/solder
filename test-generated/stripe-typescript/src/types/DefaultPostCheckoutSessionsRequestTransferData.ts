import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_specs
 */
export interface DefaultPostCheckoutSessionsRequestTransferData {
  amountPercent?: number;
  destination: string;
}

export const DefaultPostCheckoutSessionsRequestTransferDataSchema: TypedSchema<DefaultPostCheckoutSessionsRequestTransferData> = typed<DefaultPostCheckoutSessionsRequestTransferData>(object({
  amountPercent: optional(number()),
  destination: string(),
}));