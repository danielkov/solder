import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Shipping } from './Shipping';
import { ShippingSchema } from './Shipping';
import type { SourceOrderItem } from './SourceOrderItem';
import { SourceOrderItemSchema } from './SourceOrderItem';
/**
 * SourceOrder
 *
 * 
 */
export interface SourceOrder {
  /**
   * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the order.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The email address of the customer placing the order.
   */
  email?: string;
  /**
   * List of items constituting the order.
   */
  items?: Array<SourceOrderItem>;
  /**
   * Shipping
   *
   * 
   */
  shipping?: Shipping;
}

export const SourceOrderSchema: TypedSchema<SourceOrder> = typed<SourceOrder>(object({
  amount: number(),
  currency: string(),
  email: optional(string()),
  get items() { return optional(array(SourceOrderItemSchema)) },
  get shipping() { return optional(ShippingSchema) },
}));