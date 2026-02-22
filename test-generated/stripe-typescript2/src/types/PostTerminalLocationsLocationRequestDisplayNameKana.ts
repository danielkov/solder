import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The Kana variation of the name for the location (Japan only).
 */
export type PostTerminalLocationsLocationRequestDisplayNameKana = string | string;

export const PostTerminalLocationsLocationRequestDisplayNameKanaSchema: TypedSchema<PostTerminalLocationsLocationRequestDisplayNameKana> = typed<PostTerminalLocationsLocationRequestDisplayNameKana>(union(string(), string()));
