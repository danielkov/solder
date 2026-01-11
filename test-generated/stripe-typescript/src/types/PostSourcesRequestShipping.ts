import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestAddress } from './PostCheckoutSessionsRequestAddress';
import { PostCheckoutSessionsRequestAddressSchema } from './PostCheckoutSessionsRequestAddress';
/**
 * order_shipping
 */
export interface PostSourcesRequestShipping {
  /**
   * address
   */
  address: PostCheckoutSessionsRequestAddress;
  carrier?: string;
  name?: string;
  phone?: string;
  trackingNumber?: string;
}

export const PostSourcesRequestShippingSchema: TypedSchema<PostSourcesRequestShipping> = typed<PostSourcesRequestShipping>(object({
  address: PostCheckoutSessionsRequestAddressSchema,
  carrier: optional(string()),
  name: optional(string()),
  phone: optional(string()),
  trackingNumber: optional(string()),
}));