import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * from_invoice
 *
 * Revise an existing invoice. The new invoice will be created in `status=draft`. See the [revision documentation](https://stripe.com/docs/invoicing/invoice-revisions) for more details.
 */
export interface PostInvoicesRequestFromInvoice {
  action: string;
  invoice: string;
}

export const PostInvoicesRequestFromInvoiceSchema: TypedSchema<PostInvoicesRequestFromInvoice> = typed<PostInvoicesRequestFromInvoice>(object({
  action: string(),
  invoice: string(),
}));