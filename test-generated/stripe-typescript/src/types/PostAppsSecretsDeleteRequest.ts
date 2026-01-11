import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAppsSecretsRequestScope } from './PostAppsSecretsRequestScope';
import { PostAppsSecretsRequestScopeSchema } from './PostAppsSecretsRequestScope';
export interface PostAppsSecretsDeleteRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A name for the secret that's unique within the scope.
   */
  name: string;
  /**
   * scope_param
   *
   * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
   */
  scope: PostAppsSecretsRequestScope;
}

export const PostAppsSecretsDeleteRequestSchema: TypedSchema<PostAppsSecretsDeleteRequest> = typed<PostAppsSecretsDeleteRequest>(object({
  expand: optional(array(string())),
  name: string(),
  scope: PostAppsSecretsRequestScopeSchema,
}));