import { number, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * period
 */
export interface PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod {
  end: number;
  start: number;
}

export const PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriodSchema: TypedSchema<PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod> = typed<PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod>(object({ end: number(), start: number() }));
