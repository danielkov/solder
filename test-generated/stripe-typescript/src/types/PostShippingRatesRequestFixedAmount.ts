import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions } from './PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions';
import { PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptionsSchema } from './PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions';
/**
 * fixed_amount
 *
 * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
 */
export interface PostShippingRatesRequestFixedAmount {
  amount: number;
  currency: string;
  currencyOptions?: PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions;
}

export const PostShippingRatesRequestFixedAmountSchema: TypedSchema<PostShippingRatesRequestFixedAmount> = typed<PostShippingRatesRequestFixedAmount>(object({
  amount: number(),
  currency: string(),
  get currencyOptions() { return optional(PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptionsSchema) },
}));