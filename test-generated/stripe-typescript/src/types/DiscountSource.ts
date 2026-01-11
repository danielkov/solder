import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CouponOrRef } from './CouponOrRef';
import { CouponOrRefSchema } from './CouponOrRef';
/**
 * DiscountSource
 *
 * 
 */
export interface DiscountSource {
  /**
   * The coupon that was redeemed to create this discount.
   */
  coupon?: CouponOrRef;
  /**
   * The source type of the discount.
   */
  type: string;
}

export const DiscountSourceSchema: TypedSchema<DiscountSource> = typed<DiscountSource>(object({
  get coupon() { return optional(CouponOrRefSchema) },
  type: string(),
}));