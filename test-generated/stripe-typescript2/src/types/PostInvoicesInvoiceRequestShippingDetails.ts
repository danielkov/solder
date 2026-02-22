import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceRequestShippingDetailsObject } from './PostInvoicesInvoiceRequestShippingDetailsObject';
import { PostInvoicesInvoiceRequestShippingDetailsObjectSchema } from './PostInvoicesInvoiceRequestShippingDetailsObject';
/**
 * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
 */
export type PostInvoicesInvoiceRequestShippingDetails = PostInvoicesInvoiceRequestShippingDetailsObject | string;

export const PostInvoicesInvoiceRequestShippingDetailsSchema: TypedSchema<PostInvoicesInvoiceRequestShippingDetails> = typed<PostInvoicesInvoiceRequestShippingDetails>(union(PostInvoicesInvoiceRequestShippingDetailsObjectSchema, string()));
