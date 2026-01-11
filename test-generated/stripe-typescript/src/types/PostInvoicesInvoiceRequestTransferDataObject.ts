import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_specs
 */
export interface PostInvoicesInvoiceRequestTransferDataObject {
  amount?: number;
  destination: string;
}

export const PostInvoicesInvoiceRequestTransferDataObjectSchema: TypedSchema<PostInvoicesInvoiceRequestTransferDataObject> = typed<PostInvoicesInvoiceRequestTransferDataObject>(object({
  amount: optional(number()),
  destination: string(),
}));