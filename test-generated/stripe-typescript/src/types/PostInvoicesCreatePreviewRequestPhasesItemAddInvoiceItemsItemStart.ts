import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_item_period_start
 */
export interface PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStart {
  timestamp?: number;
  type: string;
}

export const PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStartSchema: TypedSchema<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStart> = typed<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStart>(object({
  timestamp: optional(number()),
  type: string(),
}));