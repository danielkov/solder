import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * subscription_update_confirm_discount_params
 */
export interface PostBillingPortalSessionsRequestDiscountsItem {
  coupon?: string;
  promotionCode?: string;
}

export const PostBillingPortalSessionsRequestDiscountsItemSchema: TypedSchema<PostBillingPortalSessionsRequestDiscountsItem> = typed<PostBillingPortalSessionsRequestDiscountsItem>(object({
  coupon: optional(string()),
  promotionCode: optional(string()),
}));