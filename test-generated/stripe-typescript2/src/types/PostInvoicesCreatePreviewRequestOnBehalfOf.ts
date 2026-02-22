import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
 */
export type PostInvoicesCreatePreviewRequestOnBehalfOf = string | string;

export const PostInvoicesCreatePreviewRequestOnBehalfOfSchema: TypedSchema<PostInvoicesCreatePreviewRequestOnBehalfOf> = typed<PostInvoicesCreatePreviewRequestOnBehalfOf>(union(string(), string()));
