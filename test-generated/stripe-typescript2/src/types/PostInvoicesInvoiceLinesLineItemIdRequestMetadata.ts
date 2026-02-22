import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-type) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](api/invoices/line_item#invoice_line_item_object-type) line items, where any existing metadata on the invoice line is merged with the incoming data.
 */
export type PostInvoicesInvoiceLinesLineItemIdRequestMetadata = PostAccountsRequestMetadataObject | string;

export const PostInvoicesInvoiceLinesLineItemIdRequestMetadataSchema: TypedSchema<PostInvoicesInvoiceLinesLineItemIdRequestMetadata> = typed<PostInvoicesInvoiceLinesLineItemIdRequestMetadata>(union(PostAccountsRequestMetadataObjectSchema, string()));
