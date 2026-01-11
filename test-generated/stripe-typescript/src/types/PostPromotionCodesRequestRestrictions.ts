import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPromotionCodesRequestCurrencyOptions } from './PostPromotionCodesRequestCurrencyOptions';
import { PostPromotionCodesRequestCurrencyOptionsSchema } from './PostPromotionCodesRequestCurrencyOptions';
/**
 * restrictions_params
 *
 * Settings that restrict the redemption of the promotion code.
 */
export interface PostPromotionCodesRequestRestrictions {
  currencyOptions?: PostPromotionCodesRequestCurrencyOptions;
  firstTimeTransaction?: boolean;
  minimumAmount?: number;
  minimumAmountCurrency?: string;
}

export const PostPromotionCodesRequestRestrictionsSchema: TypedSchema<PostPromotionCodesRequestRestrictions> = typed<PostPromotionCodesRequestRestrictions>(object({
  get currencyOptions() { return optional(PostPromotionCodesRequestCurrencyOptionsSchema) },
  firstTimeTransaction: optional(boolean()),
  minimumAmount: optional(number()),
  minimumAmountCurrency: optional(string()),
}));