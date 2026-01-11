import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Coupons defined in each available currency option (only supported if `amount_off` is passed). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export interface PostCouponsRequestCurrencyOptions {
}

export const PostCouponsRequestCurrencyOptionsSchema: TypedSchema<PostCouponsRequestCurrencyOptions> = typed<PostCouponsRequestCurrencyOptions>(object({
}));