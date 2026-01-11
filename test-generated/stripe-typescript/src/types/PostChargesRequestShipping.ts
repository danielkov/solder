import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostChargesRequestAddress } from './PostChargesRequestAddress';
import { PostChargesRequestAddressSchema } from './PostChargesRequestAddress';
/**
 * optional_fields_shipping
 *
 * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
 */
export interface PostChargesRequestShipping {
  /**
   * optional_fields_address
   */
  address: PostChargesRequestAddress;
  carrier?: string;
  name: string;
  phone?: string;
  trackingNumber?: string;
}

export const PostChargesRequestShippingSchema: TypedSchema<PostChargesRequestShipping> = typed<PostChargesRequestShipping>(object({
  address: PostChargesRequestAddressSchema,
  carrier: optional(string()),
  name: string(),
  phone: optional(string()),
  trackingNumber: optional(string()),
}));