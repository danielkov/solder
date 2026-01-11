import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostTerminalLocationsLocationRequestConfigurationOverrides = string | string;

export const PostTerminalLocationsLocationRequestConfigurationOverridesSchema: TypedSchema<PostTerminalLocationsLocationRequestConfigurationOverrides> = typed<PostTerminalLocationsLocationRequestConfigurationOverrides>(union(string(), string()));