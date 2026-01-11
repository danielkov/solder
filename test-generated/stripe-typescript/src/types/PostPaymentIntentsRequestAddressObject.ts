import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * billing_details_address
 */
export interface PostPaymentIntentsRequestAddressObject {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  state?: string;
}

export const PostPaymentIntentsRequestAddressObjectSchema: TypedSchema<PostPaymentIntentsRequestAddressObject> = typed<PostPaymentIntentsRequestAddressObject>(object({
  city: optional(string()),
  country: optional(string()),
  line1: optional(string()),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
}));