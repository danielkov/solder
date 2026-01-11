import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SecretServiceResourceScope
 *
 * 
 */
export interface SecretServiceResourceScope {
  /**
   * The secret scope type.
   */
  type: string;
  /**
   * The user ID, if type is set to "user"
   */
  user?: string;
}

export const SecretServiceResourceScopeSchema: TypedSchema<SecretServiceResourceScope> = typed<SecretServiceResourceScope>(object({
  type: string(),
  user: optional(string()),
}));