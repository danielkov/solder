import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductResourceLineItemTaxBreakdown } from './TaxProductResourceLineItemTaxBreakdown';
import { TaxProductResourceLineItemTaxBreakdownSchema } from './TaxProductResourceLineItemTaxBreakdown';
/**
 * TaxProductResourceTaxCalculationShippingCost
 *
 * 
 */
export interface TaxProductResourceTaxCalculationShippingCost {
  /**
   * The shipping amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
   */
  amount: number;
  /**
   * The amount of tax calculated for shipping, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountTax: number;
  /**
   * The ID of an existing [ShippingRate](https://stripe.com/docs/api/shipping_rates/object).
   */
  shippingRate?: string;
  /**
   * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
   */
  taxBehavior: string;
  /**
   * Detailed account of taxes relevant to shipping cost.
   */
  taxBreakdown?: Array<TaxProductResourceLineItemTaxBreakdown>;
  /**
   * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for shipping.
   */
  taxCode: string;
}

export const TaxProductResourceTaxCalculationShippingCostSchema: TypedSchema<TaxProductResourceTaxCalculationShippingCost> = typed<TaxProductResourceTaxCalculationShippingCost>(object({
  amount: number(),
  amountTax: number(),
  shippingRate: optional(string()),
  taxBehavior: string(),
  get taxBreakdown() { return optional(array(TaxProductResourceLineItemTaxBreakdownSchema)) },
  taxCode: string(),
}));