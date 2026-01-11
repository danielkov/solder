import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostPaymentIntentsIntentVerifyMicrodepositsRequest {
  /**
   * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
   */
  amounts?: Array<number>;
  /**
   * The client secret of the PaymentIntent.
   */
  clientSecret?: string;
  /**
   * A six-character code starting with SM present in the microdeposit sent to the bank account.
   */
  descriptorCode?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostPaymentIntentsIntentVerifyMicrodepositsRequestSchema: TypedSchema<PostPaymentIntentsIntentVerifyMicrodepositsRequest> = typed<PostPaymentIntentsIntentVerifyMicrodepositsRequest>(object({
  amounts: optional(array(number())),
  clientSecret: optional(string()),
  descriptorCode: optional(string()),
  expand: optional(array(string())),
}));