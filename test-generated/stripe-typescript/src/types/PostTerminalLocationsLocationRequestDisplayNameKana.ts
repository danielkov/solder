import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostTerminalLocationsLocationRequestDisplayNameKana = string | string;

export const PostTerminalLocationsLocationRequestDisplayNameKanaSchema: TypedSchema<PostTerminalLocationsLocationRequestDisplayNameKana> = typed<PostTerminalLocationsLocationRequestDisplayNameKana>(union(string(), string()));