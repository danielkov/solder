import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostCouponsRequestAppliesTo } from './PostCouponsRequestAppliesTo';
import { PostCouponsRequestAppliesToSchema } from './PostCouponsRequestAppliesTo';
import type { PostCouponsRequestCurrencyOptions } from './PostCouponsRequestCurrencyOptions';
import { PostCouponsRequestCurrencyOptionsSchema } from './PostCouponsRequestCurrencyOptions';
export interface PostCouponsRequest {
  /**
   * A positive integer representing the amount to subtract from an invoice total (required if `percent_off` is not passed).
   */
  amountOff?: number;
  /**
   * applies_to_params
   *
   * A hash containing directions for what this Coupon will apply discounts to.
   */
  appliesTo?: PostCouponsRequestAppliesTo;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `amount_off` parameter (required if `amount_off` is passed).
   */
  currency?: string;
  /**
   * Coupons defined in each available currency option (only supported if `amount_off` is passed). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: PostCouponsRequestCurrencyOptions;
  /**
   * Specifies how long the discount will be in effect if used on a subscription. Defaults to `once`.
   */
  duration?: string;
  /**
   * Required only if `duration` is `repeating`, in which case it must be a positive integer that specifies the number of months the discount will be in effect.
   */
  durationInMonths?: number;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Unique string of your choice that will be used to identify this coupon when applying it to a customer. If you don't want to specify a particular code, you can leave the ID blank and we'll generate a random code for you.
   */
  id?: string;
  /**
   * A positive integer specifying the number of times the coupon can be redeemed before it's no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
   */
  maxRedemptions?: number;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
   */
  name?: string;
  /**
   * A positive float larger than 0, and smaller or equal to 100, that represents the discount the coupon will apply (required if `amount_off` is not passed).
   */
  percentOff?: number;
  /**
   * Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.
   */
  redeemBy?: number;
}

export const PostCouponsRequestSchema: TypedSchema<PostCouponsRequest> = typed<PostCouponsRequest>(object({
  amountOff: optional(number()),
  get appliesTo() { return optional(PostCouponsRequestAppliesToSchema) },
  currency: optional(string()),
  get currencyOptions() { return optional(PostCouponsRequestCurrencyOptionsSchema) },
  duration: optional(string()),
  durationInMonths: optional(number()),
  expand: optional(array(string())),
  id: optional(string()),
  maxRedemptions: optional(number()),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  name: optional(string()),
  percentOff: optional(number()),
  redeemBy: optional(number()),
}));