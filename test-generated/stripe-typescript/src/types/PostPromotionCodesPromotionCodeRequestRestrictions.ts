import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPromotionCodesRequestCurrencyOptions } from './PostPromotionCodesRequestCurrencyOptions';
import { PostPromotionCodesRequestCurrencyOptionsSchema } from './PostPromotionCodesRequestCurrencyOptions';
/**
 * restrictions_params
 *
 * Settings that restrict the redemption of the promotion code.
 */
export interface PostPromotionCodesPromotionCodeRequestRestrictions {
  currencyOptions?: PostPromotionCodesRequestCurrencyOptions;
}

export const PostPromotionCodesPromotionCodeRequestRestrictionsSchema: TypedSchema<PostPromotionCodesPromotionCodeRequestRestrictions> = typed<PostPromotionCodesPromotionCodeRequestRestrictions>(object({
  get currencyOptions() { return optional(PostPromotionCodesRequestCurrencyOptionsSchema) },
}));