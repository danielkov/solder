import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsConfigurationRequestRebootWindowObject } from './PostTerminalConfigurationsConfigurationRequestRebootWindowObject';
import { PostTerminalConfigurationsConfigurationRequestRebootWindowObjectSchema } from './PostTerminalConfigurationsConfigurationRequestRebootWindowObject';
/**
 * Reboot time settings for readers. that support customized reboot time configuration.
 */
export type PostTerminalConfigurationsConfigurationRequestRebootWindow = PostTerminalConfigurationsConfigurationRequestRebootWindowObject | string;

export const PostTerminalConfigurationsConfigurationRequestRebootWindowSchema: TypedSchema<PostTerminalConfigurationsConfigurationRequestRebootWindow> = typed<PostTerminalConfigurationsConfigurationRequestRebootWindow>(union(PostTerminalConfigurationsConfigurationRequestRebootWindowObjectSchema, string()));
