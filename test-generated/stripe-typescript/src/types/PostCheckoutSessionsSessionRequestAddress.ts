import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * address
 */
export interface PostCheckoutSessionsSessionRequestAddress {
  city?: string;
  country: string;
  line1: string;
  line2?: string;
  postalCode?: string;
  state?: string;
}

export const PostCheckoutSessionsSessionRequestAddressSchema: TypedSchema<PostCheckoutSessionsSessionRequestAddress> = typed<PostCheckoutSessionsSessionRequestAddress>(object({
  city: optional(string()),
  country: string(),
  line1: string(),
  line2: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
}));