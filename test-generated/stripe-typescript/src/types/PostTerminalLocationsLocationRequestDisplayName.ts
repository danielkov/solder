import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostTerminalLocationsLocationRequestDisplayName = string | string;

export const PostTerminalLocationsLocationRequestDisplayNameSchema: TypedSchema<PostTerminalLocationsLocationRequestDisplayName> = typed<PostTerminalLocationsLocationRequestDisplayName>(union(string(), string()));