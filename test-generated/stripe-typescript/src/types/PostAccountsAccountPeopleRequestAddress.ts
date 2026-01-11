import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * legal_entity_and_kyc_address_specs
 *
 * The person's address.
 */
export interface PostAccountsAccountPeopleRequestAddress {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
}

export const PostAccountsAccountPeopleRequestAddressSchema: TypedSchema<PostAccountsAccountPeopleRequestAddress> = typed<PostAccountsAccountPeopleRequestAddress>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
}));