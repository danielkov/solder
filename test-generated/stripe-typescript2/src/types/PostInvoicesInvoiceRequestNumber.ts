import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Set the number for this invoice. If no number is present then a number will be assigned automatically when the invoice is finalized. In many markets, regulations require invoices to be unique, sequential and / or gapless. You are responsible for ensuring this is true across all your different invoicing systems in the event that you edit the invoice number using our API. If you use only Stripe for your invoices and do not change invoice numbers, Stripe handles this aspect of compliance for you automatically.
 */
export type PostInvoicesInvoiceRequestNumber = string | string;

export const PostInvoicesInvoiceRequestNumberSchema: TypedSchema<PostInvoicesInvoiceRequestNumber> = typed<PostInvoicesInvoiceRequestNumber>(union(string(), string()));
