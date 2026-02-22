import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A name for the location.
 */
export type PostTerminalLocationsLocationRequestDisplayName = string | string;

export const PostTerminalLocationsLocationRequestDisplayNameSchema: TypedSchema<PostTerminalLocationsLocationRequestDisplayName> = typed<PostTerminalLocationsLocationRequestDisplayName>(union(string(), string()));
