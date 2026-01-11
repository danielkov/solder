import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountSessionsRequestComponents } from './PostAccountSessionsRequestComponents';
import { PostAccountSessionsRequestComponentsSchema } from './PostAccountSessionsRequestComponents';
export interface PostAccountSessionsRequest {
  /**
   * The identifier of the account to create an Account Session for.
   */
  account: string;
  /**
   * account_session_create_components_param
   *
   * Each key of the dictionary represents an embedded component, and each embedded component maps to its configuration (e.g. whether it has been enabled or not).
   */
  components: PostAccountSessionsRequestComponents;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostAccountSessionsRequestSchema: TypedSchema<PostAccountSessionsRequest> = typed<PostAccountSessionsRequest>(object({
  account: string(),
  components: PostAccountSessionsRequestComponentsSchema,
  expand: optional(array(string())),
}));