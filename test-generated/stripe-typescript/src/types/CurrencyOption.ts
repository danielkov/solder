import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CustomUnitAmount } from './CustomUnitAmount';
import { CustomUnitAmountSchema } from './CustomUnitAmount';
import type { PriceTier } from './PriceTier';
import { PriceTierSchema } from './PriceTier';
/**
 * CurrencyOption
 *
 * 
 */
export interface CurrencyOption {
  /**
   * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
   */
  customUnitAmount?: CustomUnitAmount;
  /**
   * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
   */
  taxBehavior?: string;
  /**
   * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
   */
  tiers?: Array<PriceTier>;
  /**
   * The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
   */
  unitAmount?: number;
  /**
   * The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
   */
  unitAmountDecimal?: string;
}

export const CurrencyOptionSchema: TypedSchema<CurrencyOption> = typed<CurrencyOption>(object({
  get customUnitAmount() { return optional(CustomUnitAmountSchema) },
  taxBehavior: optional(string()),
  get tiers() { return optional(array(PriceTierSchema)) },
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));