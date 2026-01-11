import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestRecovery } from './PostCheckoutSessionsRequestRecovery';
import { PostCheckoutSessionsRequestRecoverySchema } from './PostCheckoutSessionsRequestRecovery';
/**
 * after_expiration_params
 *
 * Configure actions after a Checkout Session has expired.
 */
export interface PostCheckoutSessionsRequestAfterExpiration {
  /**
   * recovery_params
   */
  recovery?: PostCheckoutSessionsRequestRecovery;
}

export const PostCheckoutSessionsRequestAfterExpirationSchema: TypedSchema<PostCheckoutSessionsRequestAfterExpiration> = typed<PostCheckoutSessionsRequestAfterExpiration>(object({
  get recovery() { return optional(PostCheckoutSessionsRequestRecoverySchema) },
}));