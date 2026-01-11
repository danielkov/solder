import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_specs
 */
export interface PostQuotesRequestTransferDataObject {
  amount?: number;
  amountPercent?: number;
  destination: string;
}

export const PostQuotesRequestTransferDataObjectSchema: TypedSchema<PostQuotesRequestTransferDataObject> = typed<PostQuotesRequestTransferDataObject>(object({
  amount: optional(number()),
  amountPercent: optional(number()),
  destination: string(),
}));