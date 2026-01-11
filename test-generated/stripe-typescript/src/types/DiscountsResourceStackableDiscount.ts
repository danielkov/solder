import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { CouponOrRef } from './CouponOrRef';
import { CouponOrRefSchema } from './CouponOrRef';
import type { DiscountOrRef } from './DiscountOrRef';
import { DiscountOrRefSchema } from './DiscountOrRef';
import type { PromotionCodeOrRef } from './PromotionCodeOrRef';
import { PromotionCodeOrRefSchema } from './PromotionCodeOrRef';
/**
 * DiscountsResourceStackableDiscount
 *
 * 
 */
export interface DiscountsResourceStackableDiscount {
  /**
   * ID of the coupon to create a new discount for.
   */
  coupon?: CouponOrRef;
  /**
   * ID of an existing discount on the object (or one of its ancestors) to reuse.
   */
  discount?: DiscountOrRef;
  /**
   * ID of the promotion code to create a new discount for.
   */
  promotionCode?: PromotionCodeOrRef;
}

export const DiscountsResourceStackableDiscountSchema: TypedSchema<DiscountsResourceStackableDiscount> = typed<DiscountsResourceStackableDiscount>(object({
  get coupon() { return optional(CouponOrRefSchema) },
  get discount() { return optional(DiscountOrRefSchema) },
  get promotionCode() { return optional(PromotionCodeOrRefSchema) },
}));