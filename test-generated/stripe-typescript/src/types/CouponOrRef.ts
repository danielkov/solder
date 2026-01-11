import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Coupon } from './Coupon';
import { CouponSchema } from './Coupon';
export type CouponOrRef = string | Coupon;

export const CouponOrRefSchema: TypedSchema<CouponOrRef> = typed<CouponOrRef>(union(string(), CouponSchema));