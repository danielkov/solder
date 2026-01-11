import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * japan_address_kanji_specs
 */
export interface PostAccountsRequestAddressKanji {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
  town?: string;
}

export const PostAccountsRequestAddressKanjiSchema: TypedSchema<PostAccountsRequestAddressKanji> = typed<PostAccountsRequestAddressKanji>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
  town: optional(string()),
}));