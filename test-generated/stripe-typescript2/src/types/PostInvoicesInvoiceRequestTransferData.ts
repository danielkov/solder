import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceRequestTransferDataObject } from './PostInvoicesInvoiceRequestTransferDataObject';
import { PostInvoicesInvoiceRequestTransferDataObjectSchema } from './PostInvoicesInvoiceRequestTransferDataObject';
/**
 * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge. This will be unset if you POST an empty value.
 */
export type PostInvoicesInvoiceRequestTransferData = PostInvoicesInvoiceRequestTransferDataObject | string;

export const PostInvoicesInvoiceRequestTransferDataSchema: TypedSchema<PostInvoicesInvoiceRequestTransferData> = typed<PostInvoicesInvoiceRequestTransferData>(union(PostInvoicesInvoiceRequestTransferDataObjectSchema, string()));
