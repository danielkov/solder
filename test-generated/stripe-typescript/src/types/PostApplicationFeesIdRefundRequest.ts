import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostApplicationFeesIdRefundRequest {
  amount?: number;
  directive?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostApplicationFeesIdRefundRequestSchema: TypedSchema<PostApplicationFeesIdRefundRequest> = typed<PostApplicationFeesIdRefundRequest>(object({
  amount: optional(number()),
  directive: optional(string()),
  expand: optional(array(string())),
}));