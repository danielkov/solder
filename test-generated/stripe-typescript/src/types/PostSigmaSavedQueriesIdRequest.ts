import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostSigmaSavedQueriesIdRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The name of the query to update.
   */
  name?: string;
  /**
   * The sql statement to update the specified query statement with. This should be a valid Trino SQL statement that can be run in Sigma.
   */
  sql?: string;
}

export const PostSigmaSavedQueriesIdRequestSchema: TypedSchema<PostSigmaSavedQueriesIdRequest> = typed<PostSigmaSavedQueriesIdRequest>(object({
  expand: optional(array(string())),
  name: optional(string()),
  sql: optional(string()),
}));