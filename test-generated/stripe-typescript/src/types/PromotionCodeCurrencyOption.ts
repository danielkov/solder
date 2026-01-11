import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * PromotionCodeCurrencyOption
 *
 * 
 */
export interface PromotionCodeCurrencyOption {
  /**
   * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
   */
  minimumAmount: number;
}

export const PromotionCodeCurrencyOptionSchema: TypedSchema<PromotionCodeCurrencyOption> = typed<PromotionCodeCurrencyOption>(object({
  minimumAmount: number(),
}));