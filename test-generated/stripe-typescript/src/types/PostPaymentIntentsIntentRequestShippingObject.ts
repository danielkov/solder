import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostChargesRequestAddress } from './PostChargesRequestAddress';
import { PostChargesRequestAddressSchema } from './PostChargesRequestAddress';
/**
 * optional_fields_shipping
 */
export interface PostPaymentIntentsIntentRequestShippingObject {
  /**
   * optional_fields_address
   */
  address: PostChargesRequestAddress;
  carrier?: string;
  name: string;
  phone?: string;
  trackingNumber?: string;
}

export const PostPaymentIntentsIntentRequestShippingObjectSchema: TypedSchema<PostPaymentIntentsIntentRequestShippingObject> = typed<PostPaymentIntentsIntentRequestShippingObject>(object({
  address: PostChargesRequestAddressSchema,
  carrier: optional(string()),
  name: string(),
  phone: optional(string()),
  trackingNumber: optional(string()),
}));