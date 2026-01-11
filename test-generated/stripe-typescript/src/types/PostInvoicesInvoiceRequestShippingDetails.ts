import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceRequestShippingDetailsObject } from './PostInvoicesInvoiceRequestShippingDetailsObject';
import { PostInvoicesInvoiceRequestShippingDetailsObjectSchema } from './PostInvoicesInvoiceRequestShippingDetailsObject';
export type PostInvoicesInvoiceRequestShippingDetails = PostInvoicesInvoiceRequestShippingDetailsObject | string;

export const PostInvoicesInvoiceRequestShippingDetailsSchema: TypedSchema<PostInvoicesInvoiceRequestShippingDetails> = typed<PostInvoicesInvoiceRequestShippingDetails>(union(PostInvoicesInvoiceRequestShippingDetailsObjectSchema, string()));