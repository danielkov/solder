import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * promotion
 *
 * The promotion referenced by this promotion code.
 */
export interface PostPromotionCodesRequestPromotion {
  coupon?: string;
  type: string;
}

export const PostPromotionCodesRequestPromotionSchema: TypedSchema<PostPromotionCodesRequestPromotion> = typed<PostPromotionCodesRequestPromotion>(object({
  coupon: optional(string()),
  type: string(),
}));