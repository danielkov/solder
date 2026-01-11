import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * japan_address_kana_specs
 */
export interface PostAccountsRequestAddressKana {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
  town?: string;
}

export const PostAccountsRequestAddressKanaSchema: TypedSchema<PostAccountsRequestAddressKana> = typed<PostAccountsRequestAddressKana>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
  town: optional(string()),
}));