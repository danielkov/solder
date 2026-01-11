import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CurrencyOptionsProperty } from './CurrencyOptionsProperty';
import { CurrencyOptionsPropertySchema } from './CurrencyOptionsProperty';
/**
 * ShippingRateFixedAmount
 *
 * 
 */
export interface ShippingRateFixedAmount {
  /**
   * A non-negative integer in cents representing how much to charge.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: CurrencyOptionsProperty;
}

export const ShippingRateFixedAmountSchema: TypedSchema<ShippingRateFixedAmount> = typed<ShippingRateFixedAmount>(object({
  amount: number(),
  currency: string(),
  get currencyOptions() { return optional(CurrencyOptionsPropertySchema) },
}));