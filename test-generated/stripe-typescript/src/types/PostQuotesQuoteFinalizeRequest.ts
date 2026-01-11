import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostQuotesQuoteFinalizeRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
   */
  expiresAt?: number;
}

export const PostQuotesQuoteFinalizeRequestSchema: TypedSchema<PostQuotesQuoteFinalizeRequest> = typed<PostQuotesQuoteFinalizeRequest>(object({
  expand: optional(array(string())),
  expiresAt: optional(number()),
}));