import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostInvoicesInvoiceAttachPaymentRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The ID of the PaymentIntent to attach to the invoice.
   */
  paymentIntent?: string;
  /**
   * The ID of the PaymentRecord to attach to the invoice.
   */
  paymentRecord?: string;
}

export const PostInvoicesInvoiceAttachPaymentRequestSchema: TypedSchema<PostInvoicesInvoiceAttachPaymentRequest> = typed<PostInvoicesInvoiceAttachPaymentRequest>(object({
  expand: optional(array(string())),
  paymentIntent: optional(string()),
  paymentRecord: optional(string()),
}));