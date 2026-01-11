import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_params
 *
 * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to.
 */
export interface PostPaymentLinksRequestTransferData {
  amount?: number;
  destination: string;
}

export const PostPaymentLinksRequestTransferDataSchema: TypedSchema<PostPaymentLinksRequestTransferData> = typed<PostPaymentLinksRequestTransferData>(object({
  amount: optional(number()),
  destination: string(),
}));