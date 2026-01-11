import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * discount_params
 */
export interface PostCheckoutSessionsRequestDiscountsItem {
  coupon?: string;
  promotionCode?: string;
}

export const PostCheckoutSessionsRequestDiscountsItemSchema: TypedSchema<PostCheckoutSessionsRequestDiscountsItem> = typed<PostCheckoutSessionsRequestDiscountsItem>(object({
  coupon: optional(string()),
  promotionCode: optional(string()),
}));