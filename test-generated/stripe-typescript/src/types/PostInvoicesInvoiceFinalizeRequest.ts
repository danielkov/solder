import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostInvoicesInvoiceFinalizeRequest {
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action.
   */
  autoAdvance?: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostInvoicesInvoiceFinalizeRequestSchema: TypedSchema<PostInvoicesInvoiceFinalizeRequest> = typed<PostInvoicesInvoiceFinalizeRequest>(object({
  autoAdvance: optional(boolean()),
  expand: optional(array(string())),
}));