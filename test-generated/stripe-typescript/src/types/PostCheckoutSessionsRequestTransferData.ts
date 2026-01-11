import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_params
 */
export interface PostCheckoutSessionsRequestTransferData {
  amount?: number;
  destination: string;
}

export const PostCheckoutSessionsRequestTransferDataSchema: TypedSchema<PostCheckoutSessionsRequestTransferData> = typed<PostCheckoutSessionsRequestTransferData>(object({
  amount: optional(number()),
  destination: string(),
}));