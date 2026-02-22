import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsConfigurationRequestBbposWisepad3Object } from './PostTerminalConfigurationsConfigurationRequestBbposWisepad3Object';
import { PostTerminalConfigurationsConfigurationRequestBbposWisepad3ObjectSchema } from './PostTerminalConfigurationsConfigurationRequestBbposWisepad3Object';
/**
 * An object containing device type specific settings for BBPOS WisePad 3 readers.
 */
export type PostTerminalConfigurationsConfigurationRequestBbposWisepad3 = PostTerminalConfigurationsConfigurationRequestBbposWisepad3Object | string;

export const PostTerminalConfigurationsConfigurationRequestBbposWisepad3Schema: TypedSchema<PostTerminalConfigurationsConfigurationRequestBbposWisepad3> = typed<PostTerminalConfigurationsConfigurationRequestBbposWisepad3>(union(PostTerminalConfigurationsConfigurationRequestBbposWisepad3ObjectSchema, string()));
