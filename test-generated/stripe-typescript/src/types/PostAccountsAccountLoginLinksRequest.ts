import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostAccountsAccountLoginLinksRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostAccountsAccountLoginLinksRequestSchema: TypedSchema<PostAccountsAccountLoginLinksRequest> = typed<PostAccountsAccountLoginLinksRequest>(object({
  expand: optional(array(string())),
}));