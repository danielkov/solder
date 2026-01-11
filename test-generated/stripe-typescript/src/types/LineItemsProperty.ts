import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Item } from './Item';
import { ItemSchema } from './Item';
/**
 * PaymentPagesCheckoutSessionListLineItems
 *
 * The line items purchased by the customer.
 */
export interface LineItemsProperty {
  /**
   * Details about each object.
   */
  data: Array<Item>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const LineItemsPropertySchema: TypedSchema<LineItemsProperty> = typed<LineItemsProperty>(object({
  data: array(ItemSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));