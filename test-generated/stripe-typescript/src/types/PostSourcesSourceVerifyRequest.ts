import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostSourcesSourceVerifyRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The values needed to verify the source.
   */
  values: Array<string>;
}

export const PostSourcesSourceVerifyRequestSchema: TypedSchema<PostSourcesSourceVerifyRequest> = typed<PostSourcesSourceVerifyRequest>(object({
  expand: optional(array(string())),
  values: array(string()),
}));