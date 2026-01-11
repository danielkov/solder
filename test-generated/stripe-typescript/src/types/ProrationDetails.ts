import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { DiscountsResourceDiscountAmount } from './DiscountsResourceDiscountAmount';
import { DiscountsResourceDiscountAmountSchema } from './DiscountsResourceDiscountAmount';
/**
 * ProrationDetails
 *
 * 
 */
export interface ProrationDetails {
  /**
   * Discount amounts applied when the proration was created.
   */
  discountAmounts: Array<DiscountsResourceDiscountAmount>;
}

export const ProrationDetailsSchema: TypedSchema<ProrationDetails> = typed<ProrationDetails>(object({
  discountAmounts: array(DiscountsResourceDiscountAmountSchema),
}));