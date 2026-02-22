import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Discount } from './Discount';
import { DiscountSchema } from './Discount';
export type DiscountsItemOrRef = string | Discount;

export const DiscountsItemOrRefSchema: TypedSchema<DiscountsItemOrRef> = typed<DiscountsItemOrRef>(union(string(), DiscountSchema));
