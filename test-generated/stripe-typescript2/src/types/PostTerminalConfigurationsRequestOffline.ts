import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsRequestOfflineObject } from './PostTerminalConfigurationsRequestOfflineObject';
import { PostTerminalConfigurationsRequestOfflineObjectSchema } from './PostTerminalConfigurationsRequestOfflineObject';
/**
 * Configurations for collecting transactions offline.
 */
export type PostTerminalConfigurationsRequestOffline = PostTerminalConfigurationsRequestOfflineObject | string;

export const PostTerminalConfigurationsRequestOfflineSchema: TypedSchema<PostTerminalConfigurationsRequestOffline> = typed<PostTerminalConfigurationsRequestOffline>(union(PostTerminalConfigurationsRequestOfflineObjectSchema, string()));
