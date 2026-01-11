import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DeletedDiscount } from './DeletedDiscount';
import { DeletedDiscountSchema } from './DeletedDiscount';
import type { Discount } from './Discount';
import { DiscountSchema } from './Discount';
export type DiscountsItemUnion = string | Discount | DeletedDiscount;

export const DiscountsItemUnionSchema: TypedSchema<DiscountsItemUnion> = typed<DiscountsItemUnion>(union(string(), DiscountSchema, DeletedDiscountSchema));