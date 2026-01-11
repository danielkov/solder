import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceLinesLineItemIdRequestMetadata } from './PostInvoicesInvoiceLinesLineItemIdRequestMetadata';
import { PostInvoicesInvoiceLinesLineItemIdRequestMetadataSchema } from './PostInvoicesInvoiceLinesLineItemIdRequestMetadata';
import type { PostInvoicesInvoiceUpdateLinesRequestLinesItem } from './PostInvoicesInvoiceUpdateLinesRequestLinesItem';
import { PostInvoicesInvoiceUpdateLinesRequestLinesItemSchema } from './PostInvoicesInvoiceUpdateLinesRequestLinesItem';
export interface PostInvoicesInvoiceUpdateLinesRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-type) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](api/invoices/line_item#invoice_line_item_object-type) line items, where any existing metadata on the invoice line is merged with the incoming data.
   */
  invoiceMetadata?: PostInvoicesInvoiceLinesLineItemIdRequestMetadata;
  /**
   * The line items to update.
   */
  lines: Array<PostInvoicesInvoiceUpdateLinesRequestLinesItem>;
}

export const PostInvoicesInvoiceUpdateLinesRequestSchema: TypedSchema<PostInvoicesInvoiceUpdateLinesRequest> = typed<PostInvoicesInvoiceUpdateLinesRequest>(object({
  expand: optional(array(string())),
  get invoiceMetadata() { return optional(PostInvoicesInvoiceLinesLineItemIdRequestMetadataSchema) },
  lines: array(PostInvoicesInvoiceUpdateLinesRequestLinesItemSchema),
}));