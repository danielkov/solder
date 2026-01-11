import { TypedSchema, array, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { LineItemsTaxAmount } from './LineItemsTaxAmount';
import { LineItemsTaxAmountSchema } from './LineItemsTaxAmount';
import type { ShippingRateOrRef } from './ShippingRateOrRef';
import { ShippingRateOrRefSchema } from './ShippingRateOrRef';
/**
 * PaymentPagesCheckoutSessionShippingCost
 *
 * 
 */
export interface PaymentPagesCheckoutSessionShippingCost {
  /**
   * Total shipping cost before any discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total tax amount applied due to shipping costs. If no tax was applied, defaults to 0.
   */
  amountTax: number;
  /**
   * Total shipping cost after discounts and taxes are applied.
   */
  amountTotal: number;
  /**
   * The ID of the ShippingRate for this order.
   */
  shippingRate?: ShippingRateOrRef;
  /**
   * The taxes applied to the shipping rate.
   */
  taxes?: Array<LineItemsTaxAmount>;
}

export const PaymentPagesCheckoutSessionShippingCostSchema: TypedSchema<PaymentPagesCheckoutSessionShippingCost> = typed<PaymentPagesCheckoutSessionShippingCost>(object({
  amountSubtotal: number(),
  amountTax: number(),
  amountTotal: number(),
  get shippingRate() { return optional(ShippingRateOrRefSchema) },
  get taxes() { return optional(array(LineItemsTaxAmountSchema)) },
}));