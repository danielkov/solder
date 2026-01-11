import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * optional_fields_customer_address
 */
export interface PostCustomersRequestAddressObject {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
}

export const PostCustomersRequestAddressObjectSchema: TypedSchema<PostCustomersRequestAddressObject> = typed<PostCustomersRequestAddressObject>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
}));