import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersRequestAddressObject } from './PostCustomersRequestAddressObject';
import { PostCustomersRequestAddressObjectSchema } from './PostCustomersRequestAddressObject';
/**
 * customer_shipping
 */
export interface PostCustomersRequestShippingObject {
  /**
   * optional_fields_customer_address
   */
  address: PostCustomersRequestAddressObject;
  name: string;
  phone?: string;
}

export const PostCustomersRequestShippingObjectSchema: TypedSchema<PostCustomersRequestShippingObject> = typed<PostCustomersRequestShippingObject>(object({
  address: PostCustomersRequestAddressObjectSchema,
  name: string(),
  phone: optional(string()),
}));