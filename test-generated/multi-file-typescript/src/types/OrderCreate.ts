import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { ItemsItem } from './ItemsItem';
import { ItemsItemSchema } from './ItemsItem';
/**
 * Request body for creating a new order
 */
export interface OrderCreate {
  /**
   * A physical address
   */
  billingAddress?: Address;
  items: Array<ItemsItem>;
  notes?: string;
  paymentMethod?: string;
  /**
   * A physical address
   */
  shippingAddress: Address;
}

export const OrderCreateSchema: TypedSchema<OrderCreate> = typed<OrderCreate>(object({
  get billingAddress() { return optional(AddressSchema) },
  items: array(ItemsItemSchema),
  notes: optional(string()),
  paymentMethod: optional(string()),
  shippingAddress: AddressSchema,
}));