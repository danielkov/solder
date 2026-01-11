import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostTerminalLocationsLocationRequestDisplayNameKanji = string | string;

export const PostTerminalLocationsLocationRequestDisplayNameKanjiSchema: TypedSchema<PostTerminalLocationsLocationRequestDisplayNameKanji> = typed<PostTerminalLocationsLocationRequestDisplayNameKanji>(union(string(), string()));