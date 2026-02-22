import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Coupon } from './Coupon';
import { CouponSchema } from './Coupon';
/**
 * The coupon that was redeemed to create this discount.
 */
export type CouponOrRef = string | Coupon;

export const CouponOrRefSchema: TypedSchema<CouponOrRef> = typed<CouponOrRef>(union(string(), CouponSchema));
