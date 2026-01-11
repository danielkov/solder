import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostShippingRatesShippingRateTokenRequestCurrencyOptions } from './PostShippingRatesShippingRateTokenRequestCurrencyOptions';
import { PostShippingRatesShippingRateTokenRequestCurrencyOptionsSchema } from './PostShippingRatesShippingRateTokenRequestCurrencyOptions';
/**
 * fixed_amount_update
 *
 * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
 */
export interface PostShippingRatesShippingRateTokenRequestFixedAmount {
  currencyOptions?: PostShippingRatesShippingRateTokenRequestCurrencyOptions;
}

export const PostShippingRatesShippingRateTokenRequestFixedAmountSchema: TypedSchema<PostShippingRatesShippingRateTokenRequestFixedAmount> = typed<PostShippingRatesShippingRateTokenRequestFixedAmount>(object({
  get currencyOptions() { return optional(PostShippingRatesShippingRateTokenRequestCurrencyOptionsSchema) },
}));