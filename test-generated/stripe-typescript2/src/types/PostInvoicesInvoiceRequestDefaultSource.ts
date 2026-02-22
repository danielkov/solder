import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
 */
export type PostInvoicesInvoiceRequestDefaultSource = string | string;

export const PostInvoicesInvoiceRequestDefaultSourceSchema: TypedSchema<PostInvoicesInvoiceRequestDefaultSource> = typed<PostInvoicesInvoiceRequestDefaultSource>(union(string(), string()));
