import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostTestHelpersIssuingTransactionsTransactionRefundRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The total amount to attempt to refund. This amount is in the provided currency, or defaults to the cards currency, and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  refundAmount?: number;
}

export const PostTestHelpersIssuingTransactionsTransactionRefundRequestSchema: TypedSchema<PostTestHelpersIssuingTransactionsTransactionRefundRequest> = typed<PostTestHelpersIssuingTransactionsTransactionRefundRequest>(object({
  expand: optional(array(string())),
  refundAmount: optional(number()),
}));