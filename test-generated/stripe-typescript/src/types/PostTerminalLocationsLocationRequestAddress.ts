import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * optional_fields_address
 *
 * The full address of the location. You can't change the location's `country`. If you need to modify the `country` field, create a new `Location` object and re-register any existing readers to that location.
 */
export interface PostTerminalLocationsLocationRequestAddress {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
}

export const PostTerminalLocationsLocationRequestAddressSchema: TypedSchema<PostTerminalLocationsLocationRequestAddress> = typed<PostTerminalLocationsLocationRequestAddress>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
}));