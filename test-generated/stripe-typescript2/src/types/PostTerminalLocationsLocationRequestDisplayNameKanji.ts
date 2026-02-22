import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The Kanji variation of the name for the location (Japan only).
 */
export type PostTerminalLocationsLocationRequestDisplayNameKanji = string | string;

export const PostTerminalLocationsLocationRequestDisplayNameKanjiSchema: TypedSchema<PostTerminalLocationsLocationRequestDisplayNameKanji> = typed<PostTerminalLocationsLocationRequestDisplayNameKanji>(union(string(), string()));
