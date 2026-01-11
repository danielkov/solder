import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Discount } from './Discount';
import { DiscountSchema } from './Discount';
export type DiscountOrRef = string | Discount;

export const DiscountOrRefSchema: TypedSchema<DiscountOrRef> = typed<DiscountOrRef>(union(string(), DiscountSchema));