import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SecretServiceResourceScope } from './SecretServiceResourceScope';
import { SecretServiceResourceScopeSchema } from './SecretServiceResourceScope';
/**
 * SecretServiceResourceSecret
 *
 * Secret Store is an API that allows Stripe Apps developers to securely persist secrets for use by UI Extensions and app backends.

The primary resource in Secret Store is a `secret`. Other apps can't view secrets created by an app. Additionally, secrets are scoped to provide further permission control.

All Dashboard users and the app backend share `account` scoped secrets. Use the `account` scope for secrets that don't change per-user, like a third-party API key.

A `user` scoped secret is accessible by the app backend and one specific Dashboard user. Use the `user` scope for per-user secrets like per-user OAuth tokens, where different users might have different permissions.

Related guide: [Store data between page reloads](https://stripe.com/docs/stripe-apps/store-auth-data-custom-objects)
 */
export interface AppsSecret {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * If true, indicates that this secret has been deleted
   */
  deleted?: boolean;
  /**
   * The Unix timestamp for the expiry time of the secret, after which the secret deletes.
   */
  expiresAt?: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * A name for the secret that's unique within the scope.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The plaintext secret value to be stored.
   */
  payload?: string;
  /**
   * SecretServiceResourceScope
   *
   * 
   */
  scope: SecretServiceResourceScope;
}

export const AppsSecretSchema: TypedSchema<AppsSecret> = typed<AppsSecret>(object({
  created: number(),
  deleted: optional(boolean()),
  expiresAt: optional(number()),
  id: string(),
  livemode: boolean(),
  name: string(),
  object: string(),
  payload: optional(string()),
  scope: SecretServiceResourceScopeSchema,
}));