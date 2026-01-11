import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DeletedDiscount } from './DeletedDiscount';
import { DeletedDiscountSchema } from './DeletedDiscount';
import type { Discount } from './Discount';
import { DiscountSchema } from './Discount';
export type DiscountUnion = string | Discount | DeletedDiscount;

export const DiscountUnionSchema: TypedSchema<DiscountUnion> = typed<DiscountUnion>(union(string(), DiscountSchema, DeletedDiscountSchema));