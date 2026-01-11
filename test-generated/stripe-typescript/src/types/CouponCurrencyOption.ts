import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * CouponCurrencyOption
 *
 * 
 */
export interface CouponCurrencyOption {
  /**
   * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
   */
  amountOff: number;
}

export const CouponCurrencyOptionSchema: TypedSchema<CouponCurrencyOption> = typed<CouponCurrencyOption>(object({
  amountOff: number(),
}));