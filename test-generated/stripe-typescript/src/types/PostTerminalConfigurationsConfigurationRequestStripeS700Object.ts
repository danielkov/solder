import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * stripe_s700
 */
export interface PostTerminalConfigurationsConfigurationRequestStripeS700Object {
  splashscreen?: PostAccountsRequestSupportUrl;
}

export const PostTerminalConfigurationsConfigurationRequestStripeS700ObjectSchema: TypedSchema<PostTerminalConfigurationsConfigurationRequestStripeS700Object> = typed<PostTerminalConfigurationsConfigurationRequestStripeS700Object>(object({
  get splashscreen() { return optional(PostAccountsRequestSupportUrlSchema) },
}));