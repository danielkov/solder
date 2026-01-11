import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CouponOrRef } from './CouponOrRef';
import { CouponOrRefSchema } from './CouponOrRef';
/**
 * PromotionCodesResourcePromotion
 *
 * 
 */
export interface PromotionCodesResourcePromotion {
  /**
   * If promotion `type` is `coupon`, the coupon for this promotion.
   */
  coupon?: CouponOrRef;
  /**
   * The type of promotion.
   */
  type: string;
}

export const PromotionCodesResourcePromotionSchema: TypedSchema<PromotionCodesResourcePromotion> = typed<PromotionCodesResourcePromotion>(object({
  get coupon() { return optional(CouponOrRefSchema) },
  type: string(),
}));