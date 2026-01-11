import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceRequestTransferDataObject } from './PostInvoicesInvoiceRequestTransferDataObject';
import { PostInvoicesInvoiceRequestTransferDataObjectSchema } from './PostInvoicesInvoiceRequestTransferDataObject';
export type PostInvoicesInvoiceRequestTransferData = PostInvoicesInvoiceRequestTransferDataObject | string;

export const PostInvoicesInvoiceRequestTransferDataSchema: TypedSchema<PostInvoicesInvoiceRequestTransferData> = typed<PostInvoicesInvoiceRequestTransferData>(union(PostInvoicesInvoiceRequestTransferDataObjectSchema, string()));