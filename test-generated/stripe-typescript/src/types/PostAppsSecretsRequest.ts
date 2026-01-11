import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAppsSecretsRequestScope } from './PostAppsSecretsRequestScope';
import { PostAppsSecretsRequestScopeSchema } from './PostAppsSecretsRequestScope';
export interface PostAppsSecretsRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The Unix timestamp for the expiry time of the secret, after which the secret deletes.
   */
  expiresAt?: number;
  /**
   * A name for the secret that's unique within the scope.
   */
  name: string;
  /**
   * The plaintext secret value to be stored.
   */
  payload: string;
  /**
   * scope_param
   *
   * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
   */
  scope: PostAppsSecretsRequestScope;
}

export const PostAppsSecretsRequestSchema: TypedSchema<PostAppsSecretsRequest> = typed<PostAppsSecretsRequest>(object({
  expand: optional(array(string())),
  expiresAt: optional(number()),
  name: string(),
  payload: string(),
  scope: PostAppsSecretsRequestScopeSchema,
}));