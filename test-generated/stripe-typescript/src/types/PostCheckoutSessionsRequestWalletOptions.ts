import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLink } from './PostCheckoutSessionsRequestLink';
import { PostCheckoutSessionsRequestLinkSchema } from './PostCheckoutSessionsRequestLink';
/**
 * wallet_options_param
 *
 * Wallet-specific configuration.
 */
export interface PostCheckoutSessionsRequestWalletOptions {
  /**
   * wallet_options_param
   */
  link?: PostCheckoutSessionsRequestLink;
}

export const PostCheckoutSessionsRequestWalletOptionsSchema: TypedSchema<PostCheckoutSessionsRequestWalletOptions> = typed<PostCheckoutSessionsRequestWalletOptions>(object({
  get link() { return optional(PostCheckoutSessionsRequestLinkSchema) },
}));