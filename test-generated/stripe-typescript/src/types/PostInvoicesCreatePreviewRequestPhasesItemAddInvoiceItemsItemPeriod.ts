import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEnd } from './PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEnd';
import { PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEndSchema } from './PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEnd';
import type { PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStart } from './PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStart';
import { PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStartSchema } from './PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStart';
/**
 * invoice_item_period
 */
export interface PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriod {
  /**
   * invoice_item_period_end
   */
  end: PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEnd;
  /**
   * invoice_item_period_start
   */
  start: PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStart;
}

export const PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriodSchema: TypedSchema<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriod> = typed<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriod>(object({
  end: PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemEndSchema,
  start: PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemStartSchema,
}));