import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * address_specs
 */
export interface PostAccountsRequestSupportAddress {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
}

export const PostAccountsRequestSupportAddressSchema: TypedSchema<PostAccountsRequestSupportAddress> = typed<PostAccountsRequestSupportAddress>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
}));