import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestAddress } from './PostCheckoutSessionsRequestAddress';
import { PostCheckoutSessionsRequestAddressSchema } from './PostCheckoutSessionsRequestAddress';
/**
 * shipping
 */
export interface PostCheckoutSessionsRequestShipping {
  /**
   * address
   */
  address: PostCheckoutSessionsRequestAddress;
  carrier?: string;
  name: string;
  phone?: string;
  trackingNumber?: string;
}

export const PostCheckoutSessionsRequestShippingSchema: TypedSchema<PostCheckoutSessionsRequestShipping> = typed<PostCheckoutSessionsRequestShipping>(object({
  address: PostCheckoutSessionsRequestAddressSchema,
  carrier: optional(string()),
  name: string(),
  phone: optional(string()),
  trackingNumber: optional(string()),
}));