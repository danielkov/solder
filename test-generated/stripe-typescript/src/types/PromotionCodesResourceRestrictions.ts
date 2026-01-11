import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CurrencyOptionsProperty } from './CurrencyOptionsProperty';
import { CurrencyOptionsPropertySchema } from './CurrencyOptionsProperty';
/**
 * PromotionCodesResourceRestrictions
 *
 * 
 */
export interface PromotionCodesResourceRestrictions {
  /**
   * Promotion code restrictions defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: CurrencyOptionsProperty;
  /**
   * A Boolean indicating if the Promotion Code should only be redeemed for Customers without any successful payments or invoices
   */
  firstTimeTransaction: boolean;
  /**
   * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
   */
  minimumAmount?: number;
  /**
   * Three-letter [ISO code](https://stripe.com/docs/currencies) for minimum_amount
   */
  minimumAmountCurrency?: string;
}

export const PromotionCodesResourceRestrictionsSchema: TypedSchema<PromotionCodesResourceRestrictions> = typed<PromotionCodesResourceRestrictions>(object({
  get currencyOptions() { return optional(CurrencyOptionsPropertySchema) },
  firstTimeTransaction: boolean(),
  minimumAmount: optional(number()),
  minimumAmountCurrency: optional(string()),
}));