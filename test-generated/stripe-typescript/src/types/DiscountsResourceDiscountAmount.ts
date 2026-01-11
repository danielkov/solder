import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';

import type { DiscountUnion } from './DiscountUnion';
import { DiscountUnionSchema } from './DiscountUnion';
/**
 * DiscountsResourceDiscountAmount
 *
 * 
 */
export interface DiscountsResourceDiscountAmount {
  /**
   * The amount, in cents (or local equivalent), of the discount.
   */
  amount: number;
  /**
   * The discount that was applied to get this discount amount.
   */
  discount: DiscountUnion;
}

export const DiscountsResourceDiscountAmountSchema: TypedSchema<DiscountsResourceDiscountAmount> = typed<DiscountsResourceDiscountAmount>(object({
  amount: number(),
  discount: DiscountUnionSchema,
}));