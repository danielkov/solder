import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_specs
 *
 * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge.
 */
export interface PostInvoicesRequestTransferData {
  amount?: number;
  destination: string;
}

export const PostInvoicesRequestTransferDataSchema: TypedSchema<PostInvoicesRequestTransferData> = typed<PostInvoicesRequestTransferData>(object({
  amount: optional(number()),
  destination: string(),
}));