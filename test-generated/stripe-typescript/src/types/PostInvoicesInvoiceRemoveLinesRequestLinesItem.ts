import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * lines_data_param
 */
export interface PostInvoicesInvoiceRemoveLinesRequestLinesItem {
  behavior: string;
  id: string;
}

export const PostInvoicesInvoiceRemoveLinesRequestLinesItemSchema: TypedSchema<PostInvoicesInvoiceRemoveLinesRequestLinesItem> = typed<PostInvoicesInvoiceRemoveLinesRequestLinesItem>(object({
  behavior: string(),
  id: string(),
}));