import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The ID of a configuration that will be used to customize all readers in this location.
 */
export type PostTerminalLocationsLocationRequestConfigurationOverrides = string | string;

export const PostTerminalLocationsLocationRequestConfigurationOverridesSchema: TypedSchema<PostTerminalLocationsLocationRequestConfigurationOverrides> = typed<PostTerminalLocationsLocationRequestConfigurationOverrides>(union(string(), string()));
