import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export interface PostPricesRequestCurrencyOptions {
}

export const PostPricesRequestCurrencyOptionsSchema: TypedSchema<PostPricesRequestCurrencyOptions> = typed<PostPricesRequestCurrencyOptions>(object({
}));