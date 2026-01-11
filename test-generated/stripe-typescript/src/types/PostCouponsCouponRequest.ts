import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostCouponsCouponRequestCurrencyOptions } from './PostCouponsCouponRequestCurrencyOptions';
import { PostCouponsCouponRequestCurrencyOptionsSchema } from './PostCouponsCouponRequestCurrencyOptions';
export interface PostCouponsCouponRequest {
  /**
   * Coupons defined in each available currency option (only supported if the coupon is amount-based). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: PostCouponsCouponRequestCurrencyOptions;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
   */
  name?: string;
}

export const PostCouponsCouponRequestSchema: TypedSchema<PostCouponsCouponRequest> = typed<PostCouponsCouponRequest>(object({
  get currencyOptions() { return optional(PostCouponsCouponRequestCurrencyOptionsSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  name: optional(string()),
}));