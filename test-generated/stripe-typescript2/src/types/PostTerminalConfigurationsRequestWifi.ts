import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsRequestWifiObject } from './PostTerminalConfigurationsRequestWifiObject';
import { PostTerminalConfigurationsRequestWifiObjectSchema } from './PostTerminalConfigurationsRequestWifiObject';
/**
 * Configurations for connecting to a WiFi network.
 */
export type PostTerminalConfigurationsRequestWifi = PostTerminalConfigurationsRequestWifiObject | string;

export const PostTerminalConfigurationsRequestWifiSchema: TypedSchema<PostTerminalConfigurationsRequestWifi> = typed<PostTerminalConfigurationsRequestWifi>(union(PostTerminalConfigurationsRequestWifiObjectSchema, string()));
