import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LineItemsDiscountAmount } from './LineItemsDiscountAmount';
import { LineItemsDiscountAmountSchema } from './LineItemsDiscountAmount';
import type { LineItemsTaxAmount } from './LineItemsTaxAmount';
import { LineItemsTaxAmountSchema } from './LineItemsTaxAmount';
import type { Price } from './Price';
import { PriceSchema } from './Price';
/**
 * LineItem
 *
 * A line item.
 */
export interface Item {
  /**
   * Total discount amount applied. If no discounts were applied, defaults to 0.
   */
  amountDiscount: number;
  /**
   * Total before any discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total tax amount applied. If no tax was applied, defaults to 0.
   */
  amountTax: number;
  /**
   * Total after discounts and taxes.
   */
  amountTotal: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users. Defaults to product name.
   */
  description?: string;
  /**
   * The discounts applied to the line item.
   */
  discounts?: Array<LineItemsDiscountAmount>;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The price used to generate the line item.
   */
  price?: Price;
  /**
   * The quantity of products being purchased.
   */
  quantity?: number;
  /**
   * The taxes applied to the line item.
   */
  taxes?: Array<LineItemsTaxAmount>;
}

export const ItemSchema: TypedSchema<Item> = typed<Item>(object({
  amountDiscount: number(),
  amountSubtotal: number(),
  amountTax: number(),
  amountTotal: number(),
  currency: string(),
  description: optional(string()),
  get discounts() { return optional(array(LineItemsDiscountAmountSchema)) },
  id: string(),
  object: string(),
  get price() { return optional(PriceSchema) },
  quantity: optional(number()),
  get taxes() { return optional(array(LineItemsTaxAmountSchema)) },
}));