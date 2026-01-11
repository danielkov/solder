import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown } from './PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown';
import { PaymentPagesCheckoutSessionTotalDetailsResourceBreakdownSchema } from './PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown';
/**
 * PaymentPagesCheckoutSessionTotalDetails
 *
 * 
 */
export interface PaymentPagesCheckoutSessionTotalDetails {
  /**
   * This is the sum of all the discounts.
   */
  amountDiscount: number;
  /**
   * This is the sum of all the shipping amounts.
   */
  amountShipping?: number;
  /**
   * This is the sum of all the tax amounts.
   */
  amountTax: number;
  /**
   * PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown
   *
   * 
   */
  breakdown?: PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown;
}

export const PaymentPagesCheckoutSessionTotalDetailsSchema: TypedSchema<PaymentPagesCheckoutSessionTotalDetails> = typed<PaymentPagesCheckoutSessionTotalDetails>(object({
  amountDiscount: number(),
  amountShipping: optional(number()),
  amountTax: number(),
  get breakdown() { return optional(PaymentPagesCheckoutSessionTotalDetailsResourceBreakdownSchema) },
}));