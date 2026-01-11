import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * ShippingRateCurrencyOption
 *
 * 
 */
export interface ShippingRateCurrencyOption {
  /**
   * A non-negative integer in cents representing how much to charge.
   */
  amount: number;
  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  taxBehavior: string;
}

export const ShippingRateCurrencyOptionSchema: TypedSchema<ShippingRateCurrencyOption> = typed<ShippingRateCurrencyOption>(object({
  amount: number(),
  taxBehavior: string(),
}));