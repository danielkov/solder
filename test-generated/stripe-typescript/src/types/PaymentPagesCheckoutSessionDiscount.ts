import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { CouponOrRef } from './CouponOrRef';
import { CouponOrRefSchema } from './CouponOrRef';
import type { PromotionCodeOrRef } from './PromotionCodeOrRef';
import { PromotionCodeOrRefSchema } from './PromotionCodeOrRef';
/**
 * PaymentPagesCheckoutSessionDiscount
 *
 * 
 */
export interface PaymentPagesCheckoutSessionDiscount {
  /**
   * Coupon attached to the Checkout Session.
   */
  coupon?: CouponOrRef;
  /**
   * Promotion code attached to the Checkout Session.
   */
  promotionCode?: PromotionCodeOrRef;
}

export const PaymentPagesCheckoutSessionDiscountSchema: TypedSchema<PaymentPagesCheckoutSessionDiscount> = typed<PaymentPagesCheckoutSessionDiscount>(object({
  get coupon() { return optional(CouponOrRefSchema) },
  get promotionCode() { return optional(PromotionCodeOrRefSchema) },
}));