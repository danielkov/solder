import { TypedSchema, array, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { LineItemsTaxAmount } from './LineItemsTaxAmount';
import { LineItemsTaxAmountSchema } from './LineItemsTaxAmount';
import type { ShippingRateOrRef } from './ShippingRateOrRef';
import { ShippingRateOrRefSchema } from './ShippingRateOrRef';
/**
 * InvoicesResourceShippingCost
 *
 * 
 */
export interface InvoicesResourceShippingCost {
  /**
   * Total shipping cost before any taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total tax amount applied due to shipping costs. If no tax was applied, defaults to 0.
   */
  amountTax: number;
  /**
   * Total shipping cost after taxes are applied.
   */
  amountTotal: number;
  /**
   * The ID of the ShippingRate for this invoice.
   */
  shippingRate?: ShippingRateOrRef;
  /**
   * The taxes applied to the shipping rate.
   */
  taxes?: Array<LineItemsTaxAmount>;
}

export const InvoicesResourceShippingCostSchema: TypedSchema<InvoicesResourceShippingCost> = typed<InvoicesResourceShippingCost>(object({
  amountSubtotal: number(),
  amountTax: number(),
  amountTotal: number(),
  get shippingRate() { return optional(ShippingRateOrRefSchema) },
  get taxes() { return optional(array(LineItemsTaxAmountSchema)) },
}));