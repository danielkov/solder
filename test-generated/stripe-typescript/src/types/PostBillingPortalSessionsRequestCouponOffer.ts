import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * coupon_offer_param
 */
export interface PostBillingPortalSessionsRequestCouponOffer {
  coupon: string;
}

export const PostBillingPortalSessionsRequestCouponOfferSchema: TypedSchema<PostBillingPortalSessionsRequestCouponOffer> = typed<PostBillingPortalSessionsRequestCouponOffer>(object({
  coupon: string(),
}));