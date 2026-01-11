import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * japan_address_kana_specs
 *
 * The Kana variation of the person's address (Japan only).
 */
export interface PostAccountsAccountPeopleRequestAddressKana {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
  town?: string;
}

export const PostAccountsAccountPeopleRequestAddressKanaSchema: TypedSchema<PostAccountsAccountPeopleRequestAddressKana> = typed<PostAccountsAccountPeopleRequestAddressKana>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
  town: optional(string()),
}));