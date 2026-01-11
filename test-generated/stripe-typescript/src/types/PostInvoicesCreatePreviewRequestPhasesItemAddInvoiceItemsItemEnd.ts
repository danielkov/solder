import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_item_period_end
 */
export interface PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEnd {
  timestamp?: number;
  type: string;
}

export const PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEndSchema: TypedSchema<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEnd> = typed<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEnd>(object({
  timestamp: optional(number()),
  type: string(),
}));