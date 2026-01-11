import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Coupon } from './Coupon';
import { CouponSchema } from './Coupon';
/**
 * CouponsResourceCouponList
 *
 * 
 */
export interface GetCouponsResponse {
  data: Array<Coupon>;
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

export const GetCouponsResponseSchema: TypedSchema<GetCouponsResponse> = typed<GetCouponsResponse>(object({
  data: array(CouponSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));