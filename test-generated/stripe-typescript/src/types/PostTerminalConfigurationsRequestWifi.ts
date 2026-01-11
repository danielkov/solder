import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsRequestWifiObject } from './PostTerminalConfigurationsRequestWifiObject';
import { PostTerminalConfigurationsRequestWifiObjectSchema } from './PostTerminalConfigurationsRequestWifiObject';
export type PostTerminalConfigurationsRequestWifi = PostTerminalConfigurationsRequestWifiObject | string;

export const PostTerminalConfigurationsRequestWifiSchema: TypedSchema<PostTerminalConfigurationsRequestWifi> = typed<PostTerminalConfigurationsRequestWifi>(union(PostTerminalConfigurationsRequestWifiObjectSchema, string()));