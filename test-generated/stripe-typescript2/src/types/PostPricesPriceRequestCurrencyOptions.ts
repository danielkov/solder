import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostPricesPriceRequestCurrencyOptionsObject } from './PostPricesPriceRequestCurrencyOptionsObject';
import { PostPricesPriceRequestCurrencyOptionsObjectSchema } from './PostPricesPriceRequestCurrencyOptionsObject';
/**
 * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export type PostPricesPriceRequestCurrencyOptions = PostPricesPriceRequestCurrencyOptionsObject | string;

export const PostPricesPriceRequestCurrencyOptionsSchema: TypedSchema<PostPricesPriceRequestCurrencyOptions> = typed<PostPricesPriceRequestCurrencyOptions>(union(PostPricesPriceRequestCurrencyOptionsObjectSchema, string()));
