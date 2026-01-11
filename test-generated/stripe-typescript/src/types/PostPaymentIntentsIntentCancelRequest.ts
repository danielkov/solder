import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostPaymentIntentsIntentCancelRequest {
  /**
   * Reason for canceling this PaymentIntent. Possible values are: `duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`
   */
  cancellationReason?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostPaymentIntentsIntentCancelRequestSchema: TypedSchema<PostPaymentIntentsIntentCancelRequest> = typed<PostPaymentIntentsIntentCancelRequest>(object({
  cancellationReason: optional(string()),
  expand: optional(array(string())),
}));