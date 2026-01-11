import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * japan_address_kanji_specs
 *
 * The Kanji variation of the full address of the location (Japan only).
 */
export interface PostTerminalLocationsRequestAddressKanji {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
  town?: string;
}

export const PostTerminalLocationsRequestAddressKanjiSchema: TypedSchema<PostTerminalLocationsRequestAddressKanji> = typed<PostTerminalLocationsRequestAddressKanji>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
  town: optional(string()),
}));