import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions } from './PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions';
import { PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptionsSchema } from './PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions';
/**
 * fixed_amount
 */
export interface PostCheckoutSessionsRequestShippingOptionsItemFixedAmount {
  amount: number;
  currency: string;
  currencyOptions?: PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptions;
}

export const PostCheckoutSessionsRequestShippingOptionsItemFixedAmountSchema: TypedSchema<PostCheckoutSessionsRequestShippingOptionsItemFixedAmount> = typed<PostCheckoutSessionsRequestShippingOptionsItemFixedAmount>(object({
  amount: number(),
  currency: string(),
  get currencyOptions() { return optional(PostCheckoutSessionsRequestShippingOptionsItemCurrencyOptionsSchema) },
}));