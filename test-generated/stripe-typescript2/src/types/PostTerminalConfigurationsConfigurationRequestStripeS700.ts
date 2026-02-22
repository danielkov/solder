import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsConfigurationRequestStripeS700Object } from './PostTerminalConfigurationsConfigurationRequestStripeS700Object';
import { PostTerminalConfigurationsConfigurationRequestStripeS700ObjectSchema } from './PostTerminalConfigurationsConfigurationRequestStripeS700Object';
/**
 * An object containing device type specific settings for Stripe S700 readers.
 */
export type PostTerminalConfigurationsConfigurationRequestStripeS700 = PostTerminalConfigurationsConfigurationRequestStripeS700Object | string;

export const PostTerminalConfigurationsConfigurationRequestStripeS700Schema: TypedSchema<PostTerminalConfigurationsConfigurationRequestStripeS700> = typed<PostTerminalConfigurationsConfigurationRequestStripeS700>(union(PostTerminalConfigurationsConfigurationRequestStripeS700ObjectSchema, string()));
