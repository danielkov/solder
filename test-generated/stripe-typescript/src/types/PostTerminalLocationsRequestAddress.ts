import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * create_location_address_param
 *
 * The full address of the location.
 */
export interface PostTerminalLocationsRequestAddress {
  city?: string;
  country: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
}

export const PostTerminalLocationsRequestAddressSchema: TypedSchema<PostTerminalLocationsRequestAddress> = typed<PostTerminalLocationsRequestAddress>(object({
  city: optional(string()),
  country: string(),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
}));