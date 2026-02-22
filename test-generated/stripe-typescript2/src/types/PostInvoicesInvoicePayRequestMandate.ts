import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the payment_method param or the invoice's default_payment_method or default_source, if set.
 */
export type PostInvoicesInvoicePayRequestMandate = string | string;

export const PostInvoicesInvoicePayRequestMandateSchema: TypedSchema<PostInvoicesInvoicePayRequestMandate> = typed<PostInvoicesInvoicePayRequestMandate>(union(string(), string()));
