import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * stripe_s700
 *
 * An object containing device type specific settings for Stripe S700 readers.
 */
export interface PostTerminalConfigurationsRequestStripeS700 {
  splashscreen?: PostAccountsRequestSupportUrl;
}

export const PostTerminalConfigurationsRequestStripeS700Schema: TypedSchema<PostTerminalConfigurationsRequestStripeS700> = typed<PostTerminalConfigurationsRequestStripeS700>(object({
  get splashscreen() { return optional(PostAccountsRequestSupportUrlSchema) },
}));