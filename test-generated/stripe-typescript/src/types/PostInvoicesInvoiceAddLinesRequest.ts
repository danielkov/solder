import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostInvoicesInvoiceAddLinesRequestLinesItem } from './PostInvoicesInvoiceAddLinesRequestLinesItem';
import { PostInvoicesInvoiceAddLinesRequestLinesItemSchema } from './PostInvoicesInvoiceAddLinesRequestLinesItem';
export interface PostInvoicesInvoiceAddLinesRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  invoiceMetadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The line items to add.
   */
  lines: Array<PostInvoicesInvoiceAddLinesRequestLinesItem>;
}

export const PostInvoicesInvoiceAddLinesRequestSchema: TypedSchema<PostInvoicesInvoiceAddLinesRequest> = typed<PostInvoicesInvoiceAddLinesRequest>(object({
  expand: optional(array(string())),
  get invoiceMetadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  lines: array(PostInvoicesInvoiceAddLinesRequestLinesItemSchema),
}));