import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Discount } from './Discount';
import { DiscountSchema } from './Discount';
/**
 * ID of an existing discount on the object (or one of its ancestors) to reuse.
 */
export type DiscountOrRef = string | Discount;

export const DiscountOrRefSchema: TypedSchema<DiscountOrRef> = typed<DiscountOrRef>(union(string(), DiscountSchema));
