import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Coupons defined in each available currency option (only supported if the coupon is amount-based). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export interface PostCouponsCouponRequestCurrencyOptions {
}

export const PostCouponsCouponRequestCurrencyOptionsSchema: TypedSchema<PostCouponsCouponRequestCurrencyOptions> = typed<PostCouponsCouponRequestCurrencyOptions>(object({
}));