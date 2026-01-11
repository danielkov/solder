import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostPricesPriceRequestCurrencyOptionsObject } from './PostPricesPriceRequestCurrencyOptionsObject';
import { PostPricesPriceRequestCurrencyOptionsObjectSchema } from './PostPricesPriceRequestCurrencyOptionsObject';
export type PostPricesPriceRequestCurrencyOptions = PostPricesPriceRequestCurrencyOptionsObject | string;

export const PostPricesPriceRequestCurrencyOptionsSchema: TypedSchema<PostPricesPriceRequestCurrencyOptions> = typed<PostPricesPriceRequestCurrencyOptions>(union(PostPricesPriceRequestCurrencyOptionsObjectSchema, string()));