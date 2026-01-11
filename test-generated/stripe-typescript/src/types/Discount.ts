import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { DiscountSource } from './DiscountSource';
import { DiscountSourceSchema } from './DiscountSource';
import type { PromotionCodeOrRef } from './PromotionCodeOrRef';
import { PromotionCodeOrRefSchema } from './PromotionCodeOrRef';
/**
 * Discount
 *
 * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
It contains information about when the discount began, when it will end, and what it is applied to.

Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
 */
export interface Discount {
  /**
   * The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode.
   */
  checkoutSession?: string;
  /**
   * The ID of the customer associated with this discount.
   */
  customer?: CustomerUnion;
  /**
   * If the coupon has a duration of `repeating`, the date that this discount will end. If the coupon has a duration of `once` or `forever`, this attribute will be null.
   */
  end?: number;
  /**
   * The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
   */
  id: string;
  /**
   * The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
   */
  invoice?: string;
  /**
   * The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
   */
  invoiceItem?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The promotion code applied to create this discount.
   */
  promotionCode?: PromotionCodeOrRef;
  /**
   * DiscountSource
   *
   * 
   */
  source: DiscountSource;
  /**
   * Date that the coupon was applied.
   */
  start: number;
  /**
   * The subscription that this coupon is applied to, if it is applied to a particular subscription.
   */
  subscription?: string;
  /**
   * The subscription item that this coupon is applied to, if it is applied to a particular subscription item.
   */
  subscriptionItem?: string;
}

export const DiscountSchema: TypedSchema<Discount> = typed<Discount>(object({
  checkoutSession: optional(string()),
  get customer() { return optional(CustomerUnionSchema) },
  end: optional(number()),
  id: string(),
  invoice: optional(string()),
  invoiceItem: optional(string()),
  object: string(),
  get promotionCode() { return optional(PromotionCodeOrRefSchema) },
  source: DiscountSourceSchema,
  start: number(),
  subscription: optional(string()),
  subscriptionItem: optional(string()),
}));