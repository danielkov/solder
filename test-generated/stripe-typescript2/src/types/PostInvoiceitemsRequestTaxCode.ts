import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
 */
export type PostInvoiceitemsRequestTaxCode = string | string;

export const PostInvoiceitemsRequestTaxCodeSchema: TypedSchema<PostInvoiceitemsRequestTaxCode> = typed<PostInvoiceitemsRequestTaxCode>(union(string(), string()));
