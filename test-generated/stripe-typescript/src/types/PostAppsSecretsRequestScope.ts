import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * scope_param
 *
 * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
 */
export interface PostAppsSecretsRequestScope {
  type: string;
  user?: string;
}

export const PostAppsSecretsRequestScopeSchema: TypedSchema<PostAppsSecretsRequestScope> = typed<PostAppsSecretsRequestScope>(object({
  type: string(),
  user: optional(string()),
}));