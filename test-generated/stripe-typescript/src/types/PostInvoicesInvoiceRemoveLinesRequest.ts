import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostInvoicesInvoiceRemoveLinesRequestLinesItem } from './PostInvoicesInvoiceRemoveLinesRequestLinesItem';
import { PostInvoicesInvoiceRemoveLinesRequestLinesItemSchema } from './PostInvoicesInvoiceRemoveLinesRequestLinesItem';
export interface PostInvoicesInvoiceRemoveLinesRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  invoiceMetadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The line items to remove.
   */
  lines: Array<PostInvoicesInvoiceRemoveLinesRequestLinesItem>;
}

export const PostInvoicesInvoiceRemoveLinesRequestSchema: TypedSchema<PostInvoicesInvoiceRemoveLinesRequest> = typed<PostInvoicesInvoiceRemoveLinesRequest>(object({
  expand: optional(array(string())),
  get invoiceMetadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  lines: array(PostInvoicesInvoiceRemoveLinesRequestLinesItemSchema),
}));