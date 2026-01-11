import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * required_address
 */
export interface PostIssuingCardholdersRequestAddress {
  city: string;
  country: string;
  line1: string;
  line2?: string;
  postalCode: string;
  state?: string;
}

export const PostIssuingCardholdersRequestAddressSchema: TypedSchema<PostIssuingCardholdersRequestAddress> = typed<PostIssuingCardholdersRequestAddress>(object({
  city: string(),
  country: string(),
  line1: string(),
  line2: optional(string()),
  postalCode: string(),
  state: optional(string()),
}));