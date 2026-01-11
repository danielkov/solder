import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';

import type { Discount } from './Discount';
import { DiscountSchema } from './Discount';
/**
 * LineItemsDiscountAmount
 *
 * 
 */
export interface LineItemsDiscountAmount {
  /**
   * The amount discounted.
   */
  amount: number;
  /**
   * Discount
   *
   * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
It contains information about when the discount began, when it will end, and what it is applied to.

Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
   */
  discount: Discount;
}

export const LineItemsDiscountAmountSchema: TypedSchema<LineItemsDiscountAmount> = typed<LineItemsDiscountAmount>(object({
  amount: number(),
  discount: DiscountSchema,
}));