import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
 */
export type PostInvoicesInvoiceRequestEffectiveAt = number | string;

export const PostInvoicesInvoiceRequestEffectiveAtSchema: TypedSchema<PostInvoicesInvoiceRequestEffectiveAt> = typed<PostInvoicesInvoiceRequestEffectiveAt>(union(number(), string()));
