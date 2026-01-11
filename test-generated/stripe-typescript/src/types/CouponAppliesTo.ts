import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * CouponAppliesTo
 *
 * 
 */
export interface CouponAppliesTo {
  /**
   * A list of product IDs this coupon applies to
   */
  products: Array<string>;
}

export const CouponAppliesToSchema: TypedSchema<CouponAppliesTo> = typed<CouponAppliesTo>(object({
  products: array(string()),
}));