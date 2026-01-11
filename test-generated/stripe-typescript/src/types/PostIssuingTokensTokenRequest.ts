import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostIssuingTokensTokenRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Specifies which status the token should be updated to.
   */
  status: string;
}

export const PostIssuingTokensTokenRequestSchema: TypedSchema<PostIssuingTokensTokenRequest> = typed<PostIssuingTokensTokenRequest>(object({
  expand: optional(array(string())),
  status: string(),
}));