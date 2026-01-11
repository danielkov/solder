import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostPricesPriceRequestCurrencyOptions } from './PostPricesPriceRequestCurrencyOptions';
import { PostPricesPriceRequestCurrencyOptionsSchema } from './PostPricesPriceRequestCurrencyOptions';
export interface PostPricesPriceRequest {
  /**
   * Whether the price can be used for new purchases. Defaults to `true`.
   */
  active?: boolean;
  /**
   * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: PostPricesPriceRequestCurrencyOptions;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
   */
  lookupKey?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * A brief description of the price, hidden from customers.
   */
  nickname?: string;
  /**
   * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
   */
  taxBehavior?: string;
  /**
   * If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.
   */
  transferLookupKey?: boolean;
}

export const PostPricesPriceRequestSchema: TypedSchema<PostPricesPriceRequest> = typed<PostPricesPriceRequest>(object({
  active: optional(boolean()),
  get currencyOptions() { return optional(PostPricesPriceRequestCurrencyOptionsSchema) },
  expand: optional(array(string())),
  lookupKey: optional(string()),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  nickname: optional(string()),
  taxBehavior: optional(string()),
  transferLookupKey: optional(boolean()),
}));