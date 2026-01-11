import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { LineItemsDiscountAmount } from './LineItemsDiscountAmount';
import { LineItemsDiscountAmountSchema } from './LineItemsDiscountAmount';
import type { LineItemsTaxAmount } from './LineItemsTaxAmount';
import { LineItemsTaxAmountSchema } from './LineItemsTaxAmount';
/**
 * PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown
 *
 * 
 */
export interface PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown {
  /**
   * The aggregated discounts.
   */
  discounts: Array<LineItemsDiscountAmount>;
  /**
   * The aggregated tax amounts by rate.
   */
  taxes: Array<LineItemsTaxAmount>;
}

export const PaymentPagesCheckoutSessionTotalDetailsResourceBreakdownSchema: TypedSchema<PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown> = typed<PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown>(object({
  discounts: array(LineItemsDiscountAmountSchema),
  taxes: array(LineItemsTaxAmountSchema),
}));