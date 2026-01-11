import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * ClimateRemovalsProductsPrice
 *
 * 
 */
export interface ClimateRemovalsProductsPrice {
  /**
   * Fees for one metric ton of carbon removal in the currency's smallest unit.
   */
  amountFees: number;
  /**
   * Subtotal for one metric ton of carbon removal (excluding fees) in the currency's smallest unit.
   */
  amountSubtotal: number;
  /**
   * Total for one metric ton of carbon removal (including fees) in the currency's smallest unit.
   */
  amountTotal: number;
}

export const ClimateRemovalsProductsPriceSchema: TypedSchema<ClimateRemovalsProductsPrice> = typed<ClimateRemovalsProductsPrice>(object({
  amountFees: number(),
  amountSubtotal: number(),
  amountTotal: number(),
}));