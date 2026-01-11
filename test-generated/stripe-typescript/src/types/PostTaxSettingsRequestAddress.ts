import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * validated_country_address
 */
export interface PostTaxSettingsRequestAddress {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
}

export const PostTaxSettingsRequestAddressSchema: TypedSchema<PostTaxSettingsRequestAddress> = typed<PostTaxSettingsRequestAddress>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
}));