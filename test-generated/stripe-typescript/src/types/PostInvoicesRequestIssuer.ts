import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
 */
export interface PostInvoicesRequestIssuer {
  account?: string;
  type: string;
}

export const PostInvoicesRequestIssuerSchema: TypedSchema<PostInvoicesRequestIssuer> = typed<PostInvoicesRequestIssuer>(object({
  account: optional(string()),
  type: string(),
}));